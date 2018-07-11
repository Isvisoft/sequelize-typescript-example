import { Router } from 'express';

export const appRoutes = Router();
const expressSwagger = require('express-swagger-generator')(appRoutes);

/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */
appRoutes.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        produces: [
            "application/json",
            "application/xml"
        ],
        securityDefinitions: {}
    },
    basedir: __dirname, //app absolute path
    files: ['./**/*.ts'] //Path to the API handle folder
};

expressSwagger(options)


