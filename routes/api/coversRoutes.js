const express = require("express");
const router = express.Router();
const coversController = require("../../controllers/api/coversController.js");

/**
 * @swagger
 * /api/covers:
 *   get:
 *     tags:
 *       - covers
 *     summary: Get all covers (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of covers
 */

router.get("/", coversController.getAllCovers);

/**
 * @swagger
 * /api/covers/{id}:
 *   get:
 *     tags:
 *       - covers
 *     summary: Get a cover by its id
 *     parameters:
 *        - in: path
 *          name: id
 *     responses:
 *       200:
 *         description: A specific cover
 */

router.get("/:id", coversController.getCoverById);

module.exports = router;
