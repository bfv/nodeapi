
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Server } from './../shared/server';
import { Store } from '@ngrx/store';
import { AppStore } from './../state/app.store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {

    constructor(private http: Http, private store: Store<AppStore>) { }

    public login(user: string, password: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            if (user === 'bronco' && password === 'qwerty') {
                resolve(true);
            }
            else {
                reject(false);
            }
        });
    }
}
