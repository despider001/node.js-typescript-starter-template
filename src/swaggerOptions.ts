import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions: swaggerJsDoc.Options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'My API Documentation'
        },
        servers: [{
            url: 'http://localhost:3000'
        }]
    },
    apis: ['dist/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
