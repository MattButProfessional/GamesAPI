const express = require("express");
const router = express.Router();
const game_modesController = require("../../controllers/api/game_modesController.js");

/**
 * @swagger
 * /api/game_modes:
 *   get:
 *     tags:
 *       - game_modes
 *     summary: Get all game_modes (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of game_modes
 */

router.get("/", game_modesController.getAllGame_modes);

/**
 * @swagger
 * /api/game_modes/{id}:
 *   get:
 *     tags:
 *       - game_modes
 *     summary: Get a game_mode by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific game_mode
 */

router.get("/:id", game_modesController.getGame_modeById);

module.exports = router;
