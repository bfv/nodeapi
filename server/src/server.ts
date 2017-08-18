
import * as express from 'express';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as logger from 'winston';
import { GenericRoutes } from './generic-routes';
import { Routes } from './routes';
import { NextFunction, Request, Response } from 'express';

export class Server {

    private app: express.Application;
    private router: express.Router;

    public static bootstrap(): Server {
        return new Server();
    }

    constructor() {
        this.config();
        this.setupRoutes();
        this.start();
    }

    private config() {
        
        this.app = express();

        // set Helmet, https://helmetjs.github.io/docs/
        this.app.use(helmet());

        this.router = express.Router();

        // setup CORS, https://www.npmjs.com/package/cors
        this.router.use(cors({
            allowedHeaders: ['Origin', 'Content-Type', 'Accept'],
            credentials: false,
            methods: ['GET'],
            origin: 'http://localhost:4200',
            preflightContinue: true
        }));

        // set Winston for logging, https://www.npmjs.com/package/winston
        logger.configure({
            transports: [
                new (logger.transports.Console)(),
                new (logger.transports.File)({ filename: 'somefile.log' }),
            ]
        });
    }

    private setupRoutes() {

        const routes = new Routes();

        this.router.all('*', this.logRequests);
        this.router.get('/', routes['GetHome']);

        this.router.get('/servers', routes['GetServers']);

        // 404 etc
        const generic = new GenericRoutes();
        this.router.all('*', generic.handle404);

        this.app.use(this.router);
    }

    private start() {
        const port = 4210;
        this.app.listen(port, () => {
            logger.log('info', 'listening on port ' + port);
        });
    }

    private logRequests(req: Request, res: Response, next: NextFunction) {
        logger.log('info', req.method + ':', req.url);
        next();
    }
}