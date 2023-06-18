const {Barang} = require("../models")

const mongoose = require("mongoose")

const queryBarang = async(req,res ) => { 
    let result = Barang.find()
    result = await result
    .sort({_id: 1, kategori_id:-1})
    .populate("category")
    .exec();
    return res.status(200).json(result)
 }

 const postBarang = async (req,res) => {



   const body = req.body 
  
   const result = await Barang.create(body)

   if(result){
      return res.status(200).json({msg: "berhasil insert", result})
   }
   else {
      return res.status(500).json({msg: "gagal insert"})
   }
 }

 const deleteBarang = async  (req,res) => { 
   const  id = req.params.id 
   const result = await Barang.deleteOne({_id: Number(id)})
   if(result){
      return res.status(200).json({msg: "berhasil delete", reult: result})
   }
   else{
      return res.status(500).json({msg: "gagal delete"})
   }
  }

 

 module.exports = {
    queryBarang,
    postBarang,
    deleteBarang
 }