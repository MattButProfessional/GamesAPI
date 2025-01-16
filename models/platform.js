const db = require("../config/db.js")

async function getAllPlatforms(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join game_platform gp on p.platform_id = gp.platform_id"
        where = " where gp.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select p.* FROM platforms p ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getPlatformById(platformId) {
    const[rows] = await db.execute("Select * from platforms where platform_id = ?", [
        platformId
    ])
    return rows[0]
}

module.exports = {getAllPlatforms,getPlatformById}