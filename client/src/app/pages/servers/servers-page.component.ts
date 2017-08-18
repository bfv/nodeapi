import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServersService } from './../../services/servers.service';
import { Server } from './../../shared/server';
import { Store } from '@ngrx/store';
import { AppStore } from './../../state/app.store';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-servers-page',
    templateUrl: './servers-page.component.html',
    styleUrls: ['./servers-page.component.css'],
})
export class ServersPageComponent implements OnInit, OnDestroy {

    public servers: Server[];
    public serversSub$: Subscription;

    constructor(private serversService: ServersService, private store: Store<AppStore>) { }

    public ngOnInit() {

        const servers$ = this.store.select('servers');
        this.serversSub$ = servers$.subscribe(data => {
            this.servers = data;
        });

        if (!this.servers) {
            this.serversService.getServers();
        }
    }

    public refresh() {
        this.serversService.getServers();
    }

    public ngOnDestroy() {
        this.serversSub$.unsubscribe();
    }
}
