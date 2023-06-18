 const {Schema, default: mongoose} = require('mongoose');

 const AnimeSchema = new Schema({

   name: String,
   pict: String,
   desc: String,
   like: Number,
   created_at: Date
 })

 AnimeSchema.virtual("id").get(function(){
    return this._id.toString()
 })

 AnimeSchema.set("toJSON",{
    virtuals: true,
 })

 const Anime = mongoose.model("anime",AnimeSchema,"anime")

 module.exports = Anime