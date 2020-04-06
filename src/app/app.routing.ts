import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './_modules/users/login/login.component';
import {AuthGuard} from './_services/auth.guard';
import {RegisterComponent} from './_modules/users/register/register.component';
import {EventsComponent} from './_modules/events/list/events.component';


const routes: Routes = [
    { path: '', component: EventsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
