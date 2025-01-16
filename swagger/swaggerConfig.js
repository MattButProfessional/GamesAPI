const swaggerJsdoc = require("swagger-jsdoc");
const options = {    
    definition: {        
        openapi: "3.0.0",        
        info: {            
            title: "Node.js REST API with Swagger and MySQL",            
            version: "1.0.0",        
        },    
    },    
    apis: ["./routes/*.js"], // Points to API route files
    };
    const swaggerSpec = swaggerJsdoc(options);
    module.exports = swaggerSpec; 