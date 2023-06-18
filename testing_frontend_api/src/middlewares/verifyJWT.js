const jwt = require("jsonwebtoken")

const verifyJWT = (req,res,next) => { 
    const authHeader = req.headers.authorization || req.headers.authorization
    if(!authHeader?.startsWith("Bearer ")){
        return res.status(401).json({"msg": "Header tidak ada"})
    }
    const token = authHeader.split(" ")[1]
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,  (err,decoded) => { 
        console.log(err);
        if(err){
            return res.status(401).json({msg: "Invalid Token"})
        }
        req.penggguna = decoded.penggguna
        next()
     })
 }

module.exports = verifyJWT