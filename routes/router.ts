

import { Router, Request, Response } from 'express';


export const router = Router();


router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        mensaje: 'todo esta bien'
    });

});

router.post('/mensajes/:id', (req: Request, res: Response) => {
    console.log(req.body);
    const cuerpo = req.body.cuerpo;
    const de     = req.body.de;
    const id     = req.params.id;

    res.json({
        ok: true,
        mensaje: 'POST - LISTO EL POLLO!',
        cuerpo,
        de,
        id
    });

});