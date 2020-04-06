import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Event} from '../../_models/event';

@Injectable({providedIn: 'root'})
export class EventService {
    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<Event[]>(`${environment.apiUrl}/events`);
    }

}
