const db = require("../config/db.js")

async function getAllGame_modes(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join game_game_mode gp on p.game_mode_id = gp.game_mode_id"
        where = " where gp.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select p.* FROM game_modes p ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getGame_modeById(game_modeId) {
    const[rows] = await db.execute("Select * from game_modes where game_mode_id = ?", [
        game_modeId
    ])
    return rows[0]
}

module.exports = {getAllGame_modes,getGame_modeById}