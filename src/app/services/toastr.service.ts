import {EventEmitter, Injectable} from "@angular/core";

export class ToastrEvent {
    constructor(public name: string, public message: string) {

    }
}

@Injectable()
export class ToastrService {

    public eventAdded$: EventEmitter<any>;
    private events: ToastrEvent[] = [];

    constructor() {
        this.eventAdded$ = new EventEmitter();
    }

    public list(): ToastrEvent[] {
        return this.events;
    }

    public add(name: string, message: string): void {
        let toastr: ToastrEvent = new ToastrEvent(name, message);
        this.events.push(toastr);
        this.eventAdded$.emit(toastr);
    }
}
