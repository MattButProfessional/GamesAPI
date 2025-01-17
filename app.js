const express = require("express");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerConfig');
 
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
 
app.use("/api/games", gameRoutes);
app.use("/api/platforms", platformRoutes); 
app.use("/api/screenshots", screenshotRoutes); 
app.use("/api/characters", characterRoutes); 
app.use("/api/genres", genreRoutes); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));
 
app.listen(PORT, ()=>{
    console.log(`Try going to http://localhost:${PORT}/api/games`)
    console.log(`Try going to http://localhost:${PORT}/api/platforms`)
    console.log(`Try going to http://localhost:${PORT}/api/screenshots`)
    console.log(`Try going to http://localhost:${PORT}/api/characters`)
    console.log(`Try going to http://localhost:${PORT}/api/genres`)
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`)
})