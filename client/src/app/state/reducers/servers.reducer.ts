
import { Server } from './../../shared/server';
import * as ServersActions from './../actions/servers.actions';

type Action = ServersActions.All;

export function servers (state: Server[], action: Action) {

    console.log('servers reducer, type: ', action.type);

    switch (action.type) {

        case ServersActions.LOAD:
            return action.payload;

        default:
            return state;
    }
}
