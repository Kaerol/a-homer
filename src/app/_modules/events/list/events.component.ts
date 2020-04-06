import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../../_services/authentication.service';
import {EventService} from '../event.service';
import {User} from '../../../_models/user';

@Component({templateUrl: 'events.component.html'})
export class EventsComponent implements OnInit {
    currentUser: User;
    events = [];

    constructor(
        private authenticationService: AuthenticationService,
        private eventService: EventService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllEvents();
    }

    private loadAllEvents() {
        this.eventService.getAll()
            .pipe(first())
            .subscribe(events => {
                this.events = events;
            });
    }
}
