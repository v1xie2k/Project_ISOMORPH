const {Anime} = require("../models")

const mongoose = require("mongoose")

const queryAnime = async(req,res ) => { 
    let result = Anime.find()
    result = await result
    .exec();
    return res.status(200).json(result)
 }

 const postAnime = async (req,res) => {
   const body = req.body 
   
   const result = await Anime.create(body)

   if(result){
      return res.status(200).json({msg: "berhasil insert", result})
   }
   else {
      return res.status(500).json({msg: "gagal insert"})
   }
 }

const updateAnime = async(req, res) => {
   const body = req.body
   
   const result = await Anime.updateOne({__id: body.id.toHexString()},
   {
      $set: body
   })

   if(result){
      return res.status(200).json({msg: "berhasil insert", result})
   }else{
      return res.status(500).json({msg: "gagal insert"})
   }
}

 const deleteAnime = async  (req,res) => { 
   const  id = req.params.id 
   const result = await Anime.deleteOne({_id: id})
   if(result){
      return res.status(200).json({msg: "berhasil delete", reult: result})
   }
   else{
      return res.status(500).json({msg: "gagal delete"})
   }
  }

 

 module.exports = {
    queryAnime,
    postAnime,
    updateAnime,
    deleteAnime
 }