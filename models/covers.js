const db = require("../config/db.js")

async function getAllCovers(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join game_covers gp on g.game_id = gc.game_id"
        where = " where g.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select * FROM game_covers g ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getCoverById(coverId) {
    const[rows] = await db.execute("Select * from game_covers where cover_id = ?", [
        coverId
    ])
    return rows[0]
}

module.exports = {getAllCovers,getCoverById}