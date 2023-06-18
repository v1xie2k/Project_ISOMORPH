const allowedOrigins = require("../config/allowedOrigins")


const credentials = (req,res,next ) => { 
    const origin = req.headers.origin
    if(allowedOrigins.includes(origin)){
        res.header("Access-Control-Allow-Origin",origin)
        res.header("Access-Control-Allow-Credentials",true)
        res.header(
            "Access-Control-Awllow-Headers",
            "Origin",
            "X-Requested-With",
            "Content-Type",
            "Accept"
        )
    }
    next()
 }

 module.exports = credentials