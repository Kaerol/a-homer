import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../../_services/authentication.service';
import {EventService} from '../event.service';
import {HttpParams} from '@angular/common/http';

@Component({templateUrl: 'events.component.html'})
export class EventsComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private eventService: EventService
    ) {
    }

    first = 0;
    events: Event[] = [];
    idx: string;
    name: string;
    value: string;
    description: string;
    creationDates: Date[];

    static getDateAsISOString(cDate: Date) {
        const date = new Date(Date.UTC(cDate.getFullYear(), cDate.getMonth(), cDate.getDate()));
        return date.toISOString();
    }

    ngOnInit() {
        this.loadAllEvents();
    }

    handleClick($event: MouseEvent) {
        this.loadAllEvents();
    }

    private paginate($event: MouseEvent) {
            console.log('1111111111');
    }

    private loadAllEvents() {
        const params = this.getQueryParams();

        this.eventService.getAll(params)
            .subscribe(events => {
                this.events = events;
            });
    }

    private getQueryParams() {
        let params = new HttpParams();
        params = params.append('pageNo', '1');
        params = params.append('pageSize', '100');

        if (this.idx) {
            params = params.append('deviceIdx', this.idx);
        }
        if (this.name) {
            params = params.append('deviceName', this.name);
        }
        if (this.description) {
            params = params.append('description', this.description);
        }
        if (this.value) {
            params = params.append('value', this.value);
        }
        if (this.creationDates && this.creationDates[0]) {
            const dateISOString = EventsComponent.getDateAsISOString(this.creationDates[0]);
            params = params.append('creationDateAfter', dateISOString);
        }
        if (this.creationDates && this.creationDates[1]) {
            const dateISOString = EventsComponent.getDateAsISOString(this.creationDates[1]);
            params = params.append('creationDateBefore', dateISOString);
        }
        return params;
    }
}
