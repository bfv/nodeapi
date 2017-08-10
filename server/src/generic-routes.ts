
import { NextFunction, Request, Response } from 'express';

export class GenericRoutes {

    public handle404(req: Request, res: Response, next: NextFunction){ 
        res.contentType('application/json');
        res.statusCode = 404;
        res.send({ route: req.url, status: 'error'});
    }
}