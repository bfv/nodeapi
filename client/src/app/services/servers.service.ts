
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Server } from './../shared/server';
import { Store } from '@ngrx/store';
import { AppStore } from './../state/app.store';
import * as ServersActions from './../state/actions/servers.actions';

@Injectable()
export class ServersService {

    constructor(private http: Http, private store: Store<AppStore>) {
        console.log('servers.service constructor');
    }

    public getServers() {
        this.http.get('http://localhost:4210/servers')
            .map(response => response.json())
            .subscribe(data => {
                this.store.dispatch(new ServersActions.Load(data));
            });
    }
}
