import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { UsersPageComponent } from './pages/users/users-page.component';
import { ServersPageComponent } from './pages/servers/servers-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'servers', component: ServersPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
