import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from './../../../state/app.store';
import { Observable, Subscription } from 'rxjs/Rx';
import { User } from './../../../shared/user';

@Component({
    selector: 'app-login-menuitem',
    templateUrl: './login-menuitem.component.html',
    styleUrls: ['./login-menuitem.component.css']
})
export class LoginMenuitemComponent implements OnInit, OnDestroy  {

    private loginUser$: Observable<User>;
    private loginUserSub$: Subscription;
    public loginUser: User;

    constructor(private store: Store<AppStore>) { }

    public ngOnInit() {

        this.loginUser$ = this.store.select('loginuser');
        this.loginUserSub$ = this.loginUser$.subscribe(user => {
            this.loginUser = user;
        });
    }

    ngOnDestroy() {
        console.log('login-menuitem destroy?!');
        this.loginUserSub$.unsubscribe();
    }

    public test() {
        console.log('subscription alive', this.loginUserSub$ != null);
    }
}
