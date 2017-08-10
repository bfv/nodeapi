
import { NextFunction, Request, Response } from 'express';
// import * as logger from 'winston';

export class Routes {

    public GetHome(req: Request, res: Response, next: NextFunction){ 
        res.contentType('application/json');
        res.statusCode = 200;
        res.send({ route: req.url, status: 'ok'});
    }
}