import {ModuleWithProviders, NgModule} from '@angular/core';
import {EventsComponent} from './list/events.component';
import {TableModule} from 'primeng/table';
import {EventService} from './event.service';
import {CommonModule} from '@angular/common';

@NgModule({
    imports: [CommonModule, TableModule],
    exports: [EventsComponent],
    declarations: [EventsComponent],
    providers: [EventService]
})
export class EventsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: EventsModule,
            providers: [EventService]
        };
    }
}
