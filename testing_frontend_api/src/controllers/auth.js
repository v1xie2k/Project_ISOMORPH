const bcrypt = require("bcrypt")
const {Pengguna} = require("../models")
const {RefreshToken} = require("../models")
const jwt = require("jsonwebtoken")

const register = async(req,res ) => { 
    const body = req.body 
    
    const penggunaSudahAda = await Pengguna.findOne({
        username: body.username
    }).exec()
    if(penggunaSudahAda){
        return res.status(400).json({
            msg: "register dengan user lain"
        })
    }

    let hashedPassword =""
    await bcrypt.hash(body.password,10).then((hash) => { 
        hashedPassword  = hash
     })

     const result = await Pengguna.create({
        username: body.username,
        password: hashedPassword,
        nama: body.nama,
        jk: body.jk,
        umur: body.umur,
        roles: body.roles,
        refresh_token: "" 
     })
     return res.status(200).json(result)
 }

 const login = async (req,res) => { 
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({msg: "Silakan masukkan username dan password"})
    }

    const pengguna = await Pengguna.findOne({username: username}).select("-refresh_token").exec()

    console.log(pengguna)
    if(!pengguna){
        return res.status(401).json({msg: "gagal login"})
    }
    
    const checkPassword = await  bcrypt.compare(password, pengguna.password)
    // console.log(checkPassword);
    if(checkPassword){
        pengguna.password = undefined
        const accessToken = jwt.sign(
            {pengguna},
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn: process.env.ACCESS_TOKEN_TTL
            }
        )

        const refreshToken = jwt.sign(
            {pengguna},
            process.env.REFRESH_TOKEN_SECRET,
            {
                expiresIn: process.env.REFRESH_TOKEN_TTL
            }
        )
        const updatedPengguna = await Pengguna.findOneAndUpdate(
            {
                _id: pengguna._id
            },
            {
                refresh_token: refreshToken
            },
            {
                new: true
            }
        )

        const maxAgeValue = process.env.REFRESH_TOKEN_COOKIE_TTL * 60000
        console.log(maxAgeValue);

        res.cookie("jwt",refreshToken, {
            httpOnly: true,
            sameSite: "None",
            secure: true,
            maxAge: maxAgeValue
        })
        return res.status(200).json({msg: "berhasil login", access_token: accessToken})
    }
    else{
        return res.status(401).json({msg: "gagal login"})
    }
  }

  const refreshToken = async (req,res) => {
    const cookies = req.cookies 
    console.log(cookies)
    if(!cookies?.jwt){
        return res.status(401).send("tidak ada cookie")
    }
    const refreshToken = cookies.jwt
    const pengguna = await Pengguna.findOne({
        refresh_token: refreshToken
    })
        .select("-refresh_token")
        .exec()

    if(!pengguna){
        return res.sendStatus(403)
    }
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err,decoded) => { 
            if(err || pengguna._id.toString() !== decoded.pengguna._id.toString()){
                return res.sendStatus(403)
            }
            else {
                pengguna.password = undefined 
                const accessToken = jwt.sign(
                    {pengguna},
                    process.env.ACCESS_TOKEN_SECRET,
                    {
                        expiresIn: process.env.ACCESS_TOKEN_TTL
                    }
                )
                return res.status(200).json({
                    access_token: accessToken
                })
            }
         }
    )
  }

  const logout = async(req,res) => {
    const cookies = req.cookies
     if(!cookies.jwt){
        return res.sendStatus(204)
     }
     const refreshToken = cookies.jwt 
     const pengguna = await Pengguna.findOne({
        where: { refresh_token :  refreshToken}
     })
     if(!pengguna){
        res.clearCookie("jwt",{
            httpOnly: true,
            sameSite: "None",
            secure: true
        })
        return res.sendStatus(204)
     }

     await pengguna.updateOne({refresh_token: null})

     res.clearCookie("jwt",{
        httpOnly: true,
        sameSite: "None",
        secure: true
     })
     return res.sendStatus(204)
  }

  
  module.exports= {register,login, refreshToken, logout}