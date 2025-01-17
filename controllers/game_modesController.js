const Game_mode = require("../models/game_mode")

async function getAllGame_modes(req,res){
    try{
        const {start,limit,gameid} = req.query
        const game_modes = await Game_mode.getAllGame_modes(start,limit,gameid)
        res.status(200).json(game_modes)
    }catch(err){
        res.status(500).json({error: "Failed to fetch game_modes " + err})
    }
}

async function getGame_modeById(req,res) {
    try{
        const game_mode = await Game_mode.getGame_modeById(req.params.id)
        if(game_mode){
            res.status(200).json(game_mode)
        }else{
            res.status(404).json({ error: "Game_mode not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch game_mode" + err})
    }
    
}
module.exports= {getAllGame_modes, getGame_modeById}