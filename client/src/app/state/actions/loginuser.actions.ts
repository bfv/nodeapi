
import { Action } from '@ngrx/store';
import { User } from './../../shared/user';

export const LOGGEDIN = '[LoginUser] loggedin';
export const LOGGEDOUT = '[LoginUser] loggedout';

export class Login implements Action {
    readonly type = LOGGEDIN;

    constructor(public payload: User) { }
}

export class Logout implements Action {
    readonly type = LOGGEDOUT;
    readonly payload = null;
}

export type All = Login | Logout;
