import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './_modules/users/login/login.component';
import {AuthGuard} from './_services/auth.guard';
import {RegisterComponent} from './_modules/users/register/register.component';
import {EventsComponent} from './_modules/events/list/events.component';

const routes: Routes = [
    // ******* user *******
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // ******* events *******
    { path: 'events', component: EventsComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
