const db = require("../config/db.js")

async function getAllWebsites(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join websites gp on p.website_id = gp.website_id"
        where = " where gp.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select p.* FROM websites p ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getWebsiteById(websiteId) {
    const[rows] = await db.execute("Select * from websites where website_id = ?", [
        websiteId
    ])
    return rows[0]
}

module.exports = {getAllWebsites,getWebsiteById}