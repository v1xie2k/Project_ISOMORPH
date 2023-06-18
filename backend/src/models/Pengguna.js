const {default:mongoose, Schema} = require("mongoose")


const PenggunaSchema = new Schema({
    username: String,
    password: String,
    nama: String,
    jk: String,
    umur: Number,
    roles: String,
    refresh_token:String,
})

const Pengguna = mongoose.model("pengguna",PenggunaSchema,"pengguna")

module.exports = Pengguna