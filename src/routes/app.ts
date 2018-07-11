import {Router} from 'express';

import * as swaggerUI from "swagger-ui-express";
const swaggerJSON = require('../swagger/swagger.json');

export const appRoutes = Router();


appRoutes.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerJSON));


appRoutes.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});
