 const {Schema, default: mongoose} = require('mongoose');

 const AnimeSchema = new Schema({
   _id: Number,
   name: String,
   pict: String,
   desc: String,
   like: Number,
   created_at: Date,
   release: [{ _id: Number, tipe: String, airing: Number }],
 })

 AnimeSchema.virtual("id").get(function(){
    return this._id.toString()
 })

 AnimeSchema.set("toJSON",{
    virtuals: true,
 })

 const Anime = mongoose.model("anime",AnimeSchema,"anime")

 module.exports = Anime