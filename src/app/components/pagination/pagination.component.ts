import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "app-pagination",
    templateUrl: "./pagination.component.html",
    styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit, OnChanges {

    @Input() public pagination;
    @Input() public offset: number = 4;
    @Input() public page: number;
    @Output() pageUpdated = new EventEmitter();

    public pagesArray;

    constructor(public router: Router) {
    }

    ngOnInit(): void {
    }

    public pagesNumber(): any {
        if (!this.pagination.to) {
            return [];
        }
        let from = this.pagination.current_page - this.offset;
        if (from < 1) {
            from = 1;
        }
        let to = from + (this.offset * 2);
        if (to >= this.pagination.last_page) {
            to = this.pagination.last_page;
        }
        let pagesArray: any = [];
        for (from = 1; from <= to; from++) {
            pagesArray.push(from);
        }
        return pagesArray;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        // only run when property "data" changed
        if (changes['page']) {
            this.pageUpdated.emit(this.page);
        }
    }

    public changePage(page: number): void {
        this.pagination.current_page = page;
        if (page > 1) {
            this.goToPage(page);
        } else {
            this.goToPage(1);
        }
    }

    /**
     *
     * @param {number} pageNum
     */
    public goToPage(pageNum: number): void {
        this.router.navigate(["posts"], {queryParams: {page: pageNum}});
    }


    public previousPage(): void {
        this.router.navigate(["posts"], {queryParams: {page: this.page - 1}});
    }

    public nextPage(): void {
        this.router.navigate(["posts"], {queryParams: {page: this.page + 1}});
    }
}
