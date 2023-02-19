import { Component, ElementRef, EventEmitter, HostBinding, Input, OnChanges, OnDestroy, OnInit, Output, Renderer2, SimpleChanges, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { fuseAnimations } from '@fuse/animations/public-api';
import { GetDomain } from 'app/core/domain-provider/domain-provider';

@Component({
    selector     : 'search',
    templateUrl  : './search.component.html',
    styleUrls    : ['./search.component.scss'],
    encapsulation: ViewEncapsulation.None,
    exportAs     : 'fuseSearch',
    animations   : fuseAnimations
})
export class SearchComponent implements OnChanges, OnInit, OnDestroy
{
    appearance: string = 'basic';
    @Input() debounce: number = 300;
    @Input() minLength: number = 2;
    @Input() apiUrl: string = ""; // api to search data
    @Input() textKey: string = ""; // property name of selected result object
    @Input() page: number; // api page
    @Input() limit: number; // api limit
    @Input() requestBody: any = {};
    @Input() width: string = ""; // custom width
    @Input() hideBorder: boolean = false; // hide input border
    @Input() placeholder: string = "Search...";
    @Input() showResults: boolean = true; // show drop down results
    @Input() searchTemplate: TemplateRef<any>; // drop down item template
    
    @Output() search: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSearchKeyUp: EventEmitter<any> = new EventEmitter<any>();
    @Output() onSelectResult: EventEmitter<any> = new EventEmitter<any>();

    opened: boolean = false;
    results: any[];
    searchControl: FormControl = new FormControl();
    private _unsubscribeAll: Subject<any> = new Subject<any>();
    public keyUp = new Subject<any>();

    /**
     * Constructor
     */
    constructor(
        private _elementRef: ElementRef,
        private _httpClient: HttpClient,
        private _renderer2: Renderer2
    )
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any
    {
        return {
            'search-appearance-basic': this.appearance === 'basic',
            'search-opened'          : this.opened
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void
    {
        // Appearance
        if ( 'appearance' in changes )
        {
            // To prevent any issues, close the
            // search after changing the appearance
            this.close();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void
    {
        this.keyUp.pipe(
            debounceTime(this.debounce),
            distinctUntilChanged(),
            takeUntil(this._unsubscribeAll),
            map((value) => {

                this.onSearchKeyUp.emit(value);

                // Set the search results to null if there is no value or
                // the length of the value is smaller than the minLength
                // so the autocomplete panel can be closed
                if (!value || value.length < this.minLength) {
                    this.results = null;
                }

                // Continue
                return value;
            }),
            filter(value => this.apiUrl && value && value.length >= this.minLength),
            switchMap(value => {

                let queryParams = "?search=" + value +
                    (this.page ? "&page=" + this.page : "") +
                    (this.limit ? "&limit=" + this.limit : "");

                return this._httpClient.post(`${GetDomain("BUSINESS")}/${this.apiUrl}${queryParams}`, this.requestBody);
            })
        ).subscribe((response: any) => {

            // Store the results
            this.results = response.results;

            // Execute the event
            this.search.emit(response);
        });
    }

    public onClickSearchItem(searchData): void {

        this.onSelectResult.emit(searchData); // emit selected result

        if (this.textKey) {
            this.searchControl.setValue(searchData[this.textKey]);
        }
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * On keydown of the search input
     *
     * @param event
     */
    onKeydown(event: KeyboardEvent): void
    {
        // Listen for escape to close the search
        // if the appearance is 'bar'
        if ( this.appearance === 'bar' )
        {
            // Escape
            if ( event.code === 'Escape' )
            {
                // Close the search
                this.close();
            }
        }
    }

    /**
     * Open the search
     * Used in 'bar'
     */
    open(): void
    {
        // Return if it's already opened
        if ( this.opened )
        {
            return;
        }

        // Open the search
        this.opened = true;
    }

    /**
     * Close the search
     * * Used in 'bar'
     */
    close(): void
    {
        // Return if it's already closed
        if ( !this.opened )
        {
            return;
        }

        // Clear the search input
        this.searchControl.setValue('');

        // Close the search
        this.opened = false;
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any
    {
        return item.id || index;
    }
}
