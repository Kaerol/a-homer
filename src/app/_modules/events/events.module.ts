import {ModuleWithProviders, NgModule} from '@angular/core';
import {EventsComponent} from './list/events.component';
import {TableModule} from 'primeng/table';
import {EventService} from './event.service';
import {CommonModule} from '@angular/common';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, TableModule, AccordionModule, FormsModule, CalendarModule, FieldsetModule, ButtonModule],
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
