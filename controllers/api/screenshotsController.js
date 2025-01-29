const Screenshot = require("../../models/screenshot");

async function getAllScreenshots(req, res) {
  try {
    const { start, limit, gameid } = req.query;
    const screenshots = await Screenshot.getAllScreenshots(
      start,
      limit,
      gameid
    );
    res.status(200).json(screenshots);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch screenshots " + err });
  }
}

async function getScreenshotById(req, res) {
  try {
    const screenshot = await Screenshot.getScreenshotById(req.params.id);
    if (screenshot) {
      res.status(200).json(screenshot);
    } else {
      res.status(404).json({ error: "Screenshot not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch screenshot" + err });
  }
}
module.exports = { getAllScreenshots, getScreenshotById };
