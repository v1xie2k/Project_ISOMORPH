 const {Schema, default: mongoose} = require('mongoose');

 const BarangSchema = new Schema({
    name: String,
    category: {type:Number, ref: "kategori_barang"},
    variant: [{
        _id: Number, 
        name:String, 
        year: Number,
        price: Number
    }]
 })

 BarangSchema.virtual("id").get(function(){
    return this._id.toString()
 })

 BarangSchema.set("toJSON",{
    virtuals: true,
 })

 const Barang = mongoose.model("barang",BarangSchema,"barang")

 module.exports = Barang