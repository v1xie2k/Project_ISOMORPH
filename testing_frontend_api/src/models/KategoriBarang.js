const {default:mongoose,Schema} = require("mongoose")

const KategoriSchema = new Schema ({
    _id: Number,
    nama: String
})

KategoriSchema.virtual("id").get(function () {
    return this._id.toString()
})

KategoriSchema.set("toJSON",{
    virtuals: true
})

const KategoriBarang = mongoose.model("kategori_barang",KategoriSchema,"kategori_barang")

module.exports = KategoriBarang