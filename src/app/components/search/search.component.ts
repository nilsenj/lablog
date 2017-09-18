import {Component, Inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    @Input() public searchQuery: string = "";
    public searchResult: any = [];

    constructor(public search: SearchService,
                private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.searchResult = [];
                this.searchQuery = "";
            }
        });
    }

    public ngOnInit(): void {
        this.searchResult = [];
        this.searchQuery = "";
    }

    public makeSearch(event): void {
        if (event.target.value.length > 1) {
            this.search.searchQuery(event.target.value)
                .subscribe((result) => {
                    this.searchResult = result.data;
                }, error => {
                    this.searchResult = [];
                });
        } else {
            this.searchResult = [];
        }
    }

    public goTo(path: string): void {
        window.location.href = path;
    }

}
