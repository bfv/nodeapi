import { Component, OnInit } from '@angular/core';
import { ServersService } from './../../services/servers.service';
import { Store } from '@ngrx/store';
import { AppStore } from './../../state/app.store';
import * as LoginActions from './../../state/actions/loginuser.actions';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {

    constructor(private serversService: ServersService, private store: Store<AppStore>) { }

    ngOnInit() {
    }

    public refreshServers() {
        this.serversService.getServers();
    }

    public loginTest() {
        this.store.dispatch(new LoginActions.Login({id: 1, userid: 'bronco', email: '', birthday: ''}));
    }

    public logoutTest() {
        this.store.dispatch(new LoginActions.Logout());
    }
}
