import {Component, Input, OnInit} from "@angular/core";
import {FormControl} from "@angular/forms";
import { ValidationService } from "../../services/validation.service";

@Component({
  selector: "app-control-messages",
  templateUrl: "./control-messages.component.html",
  styleUrls: ["./control-messages.component.scss"]
})
export class ControlMessagesComponent implements OnInit {

    @Input() control: FormControl;
    constructor() {
    }
    ngOnInit() {}

    get errorMessage(): any {
        for (let propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }

        return null;
    }

}
