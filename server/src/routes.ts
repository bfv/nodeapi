
import { NextFunction, Request, Response } from 'express';
// import * as logger from 'winston';
import { Server } from './model/server';

export class Routes {

    public GetHome(req: Request, res: Response, next: NextFunction){ 
        res.contentType('application/json');
        res.statusCode = 200;
        res.send({ route: req.url, status: 'ok'});
    }

    public GetServers(req: Request, res: Response, next: NextFunction){ 

        const servers: Server[] = [{
            id: 1,
            host: "http://dev.oostermeyer.nl",
            port: 4220,
            base: '/',
            description: 'dev root',
        },
        {
            id: 2,
            host: "http://dev.oostermeyer.nl",
            port: 4220,
            base: "/nodeapi",
            description: 'nodeapi application',
        }/*,
        {
            id: 3,
            host: "http://dev.blabla.nl",
            port: 5000,
            base: "/",
            description: 'blabla application',
        }*/];

        res.contentType('application/json');
        res.statusCode = 200;
        res.send(servers);
    }
}
