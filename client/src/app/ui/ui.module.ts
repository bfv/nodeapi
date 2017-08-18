
import { NgModule } from '@angular/core';
import { LoginMenuitemComponent } from './components/login-menuitem/login-menuitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { AppRoutingModule } from './../app-routing.module';
import { MaterialModule } from './material/material.module';

@NgModule({
    imports: [
        BrowserModule,
        AngularFontAwesomeModule,
        AppRoutingModule,
        MaterialModule,
    ],
    exports: [
        LoginMenuitemComponent,
    ],
    declarations: [LoginMenuitemComponent],
    providers: [],
})
export class UIModule { }
