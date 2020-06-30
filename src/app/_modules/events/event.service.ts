import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Event} from '../../_models/event';

@Injectable({providedIn: 'root'})
export class EventService {
    constructor(private http: HttpClient) {
    }

    getAll(queryParams: HttpParams) {
        return this.http.get<any>(`${environment.apiUrl}/events`, {params: queryParams})
            .toPromise()
            .then(res => <Event[]>res.data)
            .then(data => {
                return data;
            });
    }
}
