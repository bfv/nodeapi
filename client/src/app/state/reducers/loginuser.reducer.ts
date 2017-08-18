
import { User } from './../../shared/user';
import * as LoginActions from './../actions/loginuser.actions';

type Action = LoginActions.All;

export function loginuser (state: User, action: Action) {

    console.log('loginuser reducer, type:', action.type);
    console.log('loginuser reducer, payload:', action.payload);

    switch (action.type) {

        case LoginActions.LOGGEDIN:
            return action.payload;

        case LoginActions.LOGGEDOUT:
            return null;

        default:
            return state;
    }
}
