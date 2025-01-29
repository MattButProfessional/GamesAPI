const Website = require("../../models/website");

async function getAllWebsites(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const websites = await Website.getAllWebsites(start, limit, gameid);
    res.status(200).json(websites);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch websites " + err });
  }
}

async function getWebsiteById(req, res) {
  try {
    const website = await Website.getWebsiteById(req.params.id);
    if (website) {
      res.status(200).json(website);
    } else {
      res.status(404).json({ error: "Website not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch website" + err });
  }
}
module.exports = { getAllWebsites, getWebsiteById };
