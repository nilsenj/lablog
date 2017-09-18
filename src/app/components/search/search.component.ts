import {Component, EventEmitter, Inject, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {SearchService} from "../../services/search.service";
import {NavigationEnd, Router} from "@angular/router";
import * as $ from "jquery";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
    @Input() public searchQuery: string = "";
    public searchResult: any = [];
    public emitter = new EventEmitter();

    constructor(public search: SearchService,
                private router: Router) {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.searchResult = [];
                this.searchQuery = "";
            }
        });
        this.emitter.subscribe((event) => {
            console.log(event);
            event.searchResult = [];
            event.searchQuery = "";
        });
    }

    public ngOnInit(): void {
        this.clear();
    }

    public makeSearch(event): void {
        if (event.target.value.length > 1) {
            this.search.searchQuery(event.target.value)
                .subscribe((result) => {
                    this.searchResult = result.data;
                    this.domEventToggleSearchClear(this);
                }, error => {
                    this.searchResult = [];
                });
        } else {
            this.searchResult = [];
        }
    }

    public domEventToggleSearchClear(that: SearchComponent): void {
        $(document).ready(() => {
            $("body").not(".result").not("li").on("click", (event) => {
                event.stopPropagation();
                console.log(event);
                if (!$(event.target).closest("#search-block, #search-result").length) {
                    that.emitter.emit(that);
                }
            });
        });
    }

    public clear(): void {
        this.searchResult = [];
        this.searchQuery = "";
    }

}
