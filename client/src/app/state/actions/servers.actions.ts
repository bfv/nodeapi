
import { Action } from '@ngrx/store';
import { Server } from './../../shared/server';

export const LOAD = '[Servers] load';
export const ADD = '[Servers] add';
export const REMOVE = '[Servers] remove';
export const UPDATE = '[Servers] update';

export class Load implements Action {
    readonly type = LOAD;

    constructor(public payload: Server[]) { }
}

export type All = Load;
