import {Component, OnInit} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";

export interface IConfirmModel {
    title:string;
    message:string;
    className:string;
}
@Component({
    selector: 'app-confirm-component',
    templateUrl: './confirm-component.component.html',
    styleUrls: ['./confirm-component.component.scss']
})
export class ConfirmComponentComponent extends DialogComponent<IConfirmModel, boolean> implements IConfirmModel, OnInit {

    public title: string;
    public message: string;
    public className: string;

    constructor(dialogService: DialogService) {
        super(dialogService);
    }

    confirm(): void {
        // we set dialog result as true on click on confirm button,
        // then we can get dialog result from caller code
        this.result = true;
        this.close();
    }

    ngOnInit(): void {
    }


}
