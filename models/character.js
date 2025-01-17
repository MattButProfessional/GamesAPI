const db = require("../config/db.js")

async function getAllCharacters(start=0,limit=50,gameId) {
    let where = ""
    let join = ""
    let params = []

    if(gameId){
        join = "inner join game_characters gp on p.character_id = gp.characters_id"
        where = " where gp.game_id = ? "
        params.push(gameId)
    }
    params.push(start.toString())
    params.push(limit.toString())
    
    const [rows] = await db.execute(`Select p.* FROM characters p ${join} ${where} limit ?,?`, params)
    return rows;
}

async function getCharacterById(characterId) {
    const[rows] = await db.execute("Select * from characters where character_id = ?", [
        characterId
    ])
    return rows[0]
}

module.exports = {getAllCharacters,getCharacterById}