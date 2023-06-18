const request = require('request');
const {Anime} = require("../models")

const mongoose = require("mongoose")

const queryAnime = async(req,res ) => { 
    let result = Anime.find()
    result = await result
    .exec();
    return res.status(200).json(result)
 }

 const postAnime = async (req,res) => {
   const getMaxId = await Anime.aggregate()
        .group({ _id: null, maxId: { $max: "$_id" } })
        .project({ _id: 0, maxId: 1 })
        .exec();

   const id = Number(getMaxId[0].maxId) + 1;

   const body = req.body;
   body["_id"] = id;
   await request('https://api.waifu.pics/sfw/waifu', async function (error, response, resBody) {
   if (!error && response.statusCode == 200) {
      const thisBody = JSON.parse(resBody)
      body['pict'] = thisBody.url
      const result = await Anime.create(body)
      if(result){
         return res.status(200).json({msg: "berhasil insert", result})
      }
      else {
         return res.status(500).json({msg: "gagal insert"})
      }
   }
   }) 

 }

const updateAnime = async(req, res) => {
   const { name, desc} = req.body
   const {id} = req.params
   // console.log(req.bod);
   const result = await Anime.updateOne({_id: id},
   {
      $set: {
         name,
         desc
      }
   })
   console.log(result);
   if(result){
      return res.status(200).json({msg: "berhasil updaet"})
   }else{
      return res.status(500).json({msg: "gagal update"})
   }
}


const updateLikeAnime = async(req, res) => {
   const {id, like} = req.params
   // console.log(req.bod);
   const result = await Anime.updateOne({_id: id},
   {
      $set: {
         like
      }
   })
   console.log(id);
   console.log(like);
   console.log(result);
   if(result){
      return res.status(200).json({msg: "berhasil updaet"})
   }else{
      return res.status(500).json({msg: "gagal update"})
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
    updateLikeAnime,
    deleteAnime
 }