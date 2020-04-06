import {Device} from './device';

export class Event {
    id: number;
    device: Device;
    value: string;
    lastUpdate: string;
    creationDate: string;
}
