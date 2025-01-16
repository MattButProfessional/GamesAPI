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
 
 
const PORT = 3000;
const app = express();
 
const gameRoutes = require("./routes/gamesRoutes");
 
app.use("/api/games", gameRoutes);
 
const platformRoutes = require("./routes/platformsRoutes");
 
app.use("/api/platform", platformRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));
 
app.listen(PORT, ()=>{
    console.log(`Try going to http://localhost:${PORT}/api/games`)
    console.log(`Try going to http://localhost:${PORT}/api/platforms`)
    console.log(`Try going to http://localhost:${PORT}/api/screenshots`)
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`)
})