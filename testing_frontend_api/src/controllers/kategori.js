const {KategoriBarang} = require("../models")

const queryKategori = async(req,res) => {
    let result  = await KategoriBarang.find().exec()
    return res.status(200).json(result)
}

module.exports= {
    queryKategori,
}