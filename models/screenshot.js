const db = require("../config/db.js")

async function getAllScreenshots(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join screenshots gp on p.screenshot_id = gp.screenshot_id"
        where = " where gp.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select p.* FROM screenshots p ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getScreenshotById(screenshotId) {
    const[rows] = await db.execute("Select * from screenshots where screenshot_id = ?", [
        screenshotId
    ])
    return rows[0]
}

module.exports = {getAllScreenshots,getScreenshotById}