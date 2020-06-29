import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class EventService {
    constructor(private http: HttpClient) {
    }

    getAll(queryParams: HttpParams): Observable<Event[]> {
        return this.http.get<Event[]>(`${environment.apiUrl}/events`, {params: queryParams});
    }

}
