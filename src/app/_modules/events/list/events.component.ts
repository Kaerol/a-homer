import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../../_services/authentication.service';
import {EventService} from '../event.service';
import {HttpParams} from '@angular/common/http';
import {Event} from '../../../_models/event';

@Component({templateUrl: 'events.component.html'})
export class EventsComponent implements OnInit {

    constructor(
        private authenticationService: AuthenticationService,
        private eventService: EventService
    ) {
    }

    first = 0;
    pageSize = 100;
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

    private loadAllEvents() {
        const params = this.getQueryParams();

        this.eventService.getAll(params).then(
            events => this.events = events
        );
    }

    next() {
        this.first = this.first + this.pageSize;
    }

    prev() {
        this.first = this.first - this.pageSize;
    }

    reset() {
        this.first = 0;
    }

    isLastPage(): boolean {
        return this.first === (this.events.length - this.pageSize);
    }

    isFirstPage(): boolean {
        return this.first === 0;
    }

    private getQueryParams() {
        let params = new HttpParams();
        params = params.append('pageNo', '1');
        params = params.append('pageSize', String(this.pageSize));

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
