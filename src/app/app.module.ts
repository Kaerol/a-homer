import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';

import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {CardModule, PanelMenuModule} from 'primeng';
import {AlertComponent} from './_components/alert.component';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {AddHeaderInterceptor} from './_helpers/header.interceptor';
import {EventsModule} from './_modules/events/events.module';
import {UsersModule} from './_modules/users/users.module';

@NgModule({
    declarations: [
        AppComponent,
        AlertComponent
    ],
    imports: [
        appRoutingModule,
        EventsModule.forRoot(),
        UsersModule.forRoot(),
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule,
        PanelMenuModule,
        FormsModule,
        ReactiveFormsModule,
        CardModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}
