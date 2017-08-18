import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    public model: LoginData;

    constructor(private auth: AuthService) {
        this.model = new LoginData();
    }

    ngOnInit() {
    }

    public onSubmit() {
        this.auth.login(this.model.user, this.model.password)
        .then(loginOk => {
            console.log('OK:', loginOk);
        })
        .catch(loginOk => {
            console.log('OK:', loginOk);
        });
    }

}

class LoginData {
    public user: string;
    public password: string;
}
