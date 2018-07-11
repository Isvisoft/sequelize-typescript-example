import {Router} from 'express';

export const appRoutes = Router();

appRoutes.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Peticion realizada correctamente'
    });

});
