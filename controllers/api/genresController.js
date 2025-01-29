const Genre = require("../../models/genre");

async function getAllGenres(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const genres = await Genre.getAllGenres(start, limit, gameid);
    res.status(200).json(genres);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch genres " + err });
  }
}

async function getGenreById(req, res) {
  try {
    const genre = await Genre.getGenreById(req.params.id);
    if (genre) {
      res.status(200).json(genre);
    } else {
      res.status(404).json({ error: "Genre not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch genre" + err });
  }
}
module.exports = { getAllGenres, getGenreById };
