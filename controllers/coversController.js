const Cover = require("../models/covers")

async function getAllCovers(req,res){
    try{
        const {start,limit,gameid} = req.query
        const covers = await Cover.getAllCovers(start,limit,gameid)
        res.status(200).json(covers)
    }catch(err){
        res.status(500).json({error: "Failed to fetch covers " + err})
    }
}

async function getCoverById(req,res) {
    try{
        const cover = await Cover.getCoverById(req.params.id)
        if(cover){
            res.status(200).json(cover)
        }else{
            res.status(404).json({ error: "Cover not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch cover" + err})
    }
    
}
module.exports= {getAllCovers, getCoverById}