import {ToastOptions} from "ng2-toastr/src/toast-options";

export class CustomToastr extends ToastOptions {
    positionClass = "toast-bottom-right"; // you can override any options available
    newestOnTop = false;
    showCloseButton = true;
}
