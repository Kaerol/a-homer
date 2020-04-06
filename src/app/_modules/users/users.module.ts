import {ModuleWithProviders, NgModule} from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {UserService} from './user.service';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
    exports: [RegisterComponent, LoginComponent],
    declarations: [RegisterComponent, LoginComponent],
    providers: [UserService],
    imports: [
        ReactiveFormsModule,
        CommonModule
    ]
})

export class UsersModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: UsersModule,
            providers: [UserService]
        };
    }
}
