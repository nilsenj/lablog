import { Pipe, PipeTransform } from "@angular/core";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Pipe({ name: "keepHtml", pure: false })
export class KeepHtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(content: any) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}