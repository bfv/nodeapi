
import { Server } from './../shared/server';
import { User } from './../shared/user';

export interface AppStore {
    servers: Server[];
    loginuser: User;
}
