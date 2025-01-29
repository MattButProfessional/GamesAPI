const settings = require("./config/settings");
const path = require("path");
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

const app = express();

const gameRoutes = require("./routes/api/gamesRoutes");
const platformRoutes = require("./routes/api/platformsRoutes");
const screenshotRoutes = require("./routes/api/screenshotsRoutes");
const characterRoutes = require("./routes/api/charactersRoutes");
const genreRoutes = require("./routes/api/genresRoutes");
const game_modeRoutes = require("./routes/api/game_modesRoutes");
const websiteRoutes = require("./routes/api/websitesRoutes");
const similarRoutes = require("./routes/api/similarsRoutes");
const coverRoutes = require("./routes/api/coversRoutes");

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

const homeRoute = require("./routes/views/homeRoutes");
app.use("/", homeRoute);
app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(settings.PORT, () => {
  console.log(`${settings.ROOT}:${settings.PORT}`);
  console.log(
    `Swagger docs available at ${settings.ROOT}:${settings.PORT}/api-docs`
  );
});
