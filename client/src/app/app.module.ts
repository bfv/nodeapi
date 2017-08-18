import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './ui/material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { UIModule } from './ui/ui.module';

// ngrx store stuff
import { StoreModule, Store } from '@ngrx/store';
import { reducers } from './state/reducers.store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { UsersPageComponent } from './pages/users/users-page.component';
import { ServersPageComponent } from './pages/servers/servers-page.component';

import { ServersService } from './services/servers.service';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        LoginPageComponent,
        UsersPageComponent,
        ServersPageComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        HttpModule,
        NgbModule.forRoot(),
        StoreModule.forRoot(reducers),
        AngularFontAwesomeModule,
        UIModule,
    ],
    providers: [
        ServersService,
        AuthService,
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }
