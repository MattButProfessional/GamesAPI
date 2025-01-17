const db = require("../config/db.js")

async function getAllGenres(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join game_genre gp on p.genre_id = gp.genre_id"
        where = " where gp.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select p.* FROM genres p ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getGenreById(genreId) {
    const[rows] = await db.execute("Select * from genres where genre_id = ?", [
        genreId
    ])
    return rows[0]
}

module.exports = {getAllGenres,getGenreById}