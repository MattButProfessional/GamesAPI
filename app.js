const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");

// Options for Swagger UI
const swaggerOptions = {
  swaggerOptions: {
    tryItOutEnabled: true, // This enables "Try it out" by default
    defaultModelsExpandDepth: -1, // Prevents models from expanding
    defaultModelExpandDepth: 2, // Sets depth for model expansion
  },
};

const PORT = 3001;
const app = express();

const gameRoutes = require("./routes/gamesRoutes");
const platformRoutes = require("./routes/platformsRoutes");
const screenshotRoutes = require("./routes/screenshotsRoutes");
const characterRoutes = require("./routes/charactersRoutes");
const genreRoutes = require("./routes/genresRoutes");
const game_modeRoutes = require("./routes/game_modesRoutes");
const websiteRoutes = require("./routes/websitesRoutes");
const similarRoutes = require("./routes/similarsRoutes");
const coverRoutes = require("./routes/coversRoutes");

app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes);
app.use("/api/screenshots", screenshotRoutes);
app.use("/api/characters", characterRoutes);
app.use("/api/genres", genreRoutes);
app.use("/api/game_modes", game_modeRoutes);
app.use("/api/websites", websiteRoutes);
app.use("/api/similar", similarRoutes);
app.use("/api/covers", coverRoutes);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, swaggerOptions)
);

app.listen(PORT, () => {
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
