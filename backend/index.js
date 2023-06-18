const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const port = 3000
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const credentials = require("./src/middlewares/credentials")
const corsOptions = require("./src/config/corsOptions")
const app = express()
app.use(cookieParser())
app.use(credentials)
app.use(cors(corsOptions))
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const barangRouter = require("./src/routes/barang")
const animeRouter = require("./src/routes/anime")
const kategoriRouter = require("./src/routes/kategori")
const authRouter = require("./src/routes/auth")
app.use("/api/v1/barang",barangRouter)
app.use("/api/v1/anime", animeRouter)
app.use("/api/v1/kategori",kategoriRouter)
app.use("/api/v1/auth",authRouter)

const initApp = async() => { 
    console.log("Connecting to mongo");
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/proyek`)
        console.log("Berhasil connect");
        app.listen(port,()=>{
            console.log(`Example app listening on port ${port}`);
        })
    } catch (error) {
        console.error(error);
    }
 }

 initApp()