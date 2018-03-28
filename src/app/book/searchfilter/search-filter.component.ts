import { Component, OnInit, OnChanges, EventEmitter, Output, Input } from '@angular/core';

import { SearchModel } from '../../models/search.model';
import { FilterModel } from '../../models/filter.model';

@Component ({
    selector: 'app-book-searchfilter',
    templateUrl: './search-filter.component.html',
    styleUrls: ['./search-filter.component.css'],
})
export class SearchFilterComponent implements OnInit, OnChanges {

    @Input() showOperationCheckbox: boolean = false;

    //search object for search part
    searchObject: SearchModel;

    //filter object for filter part
    filterObject: FilterModel;

    @Output() onSearchContentChange = new EventEmitter<SearchModel>();
    @Output() onFilterContentChange = new EventEmitter<FilterModel>();
    constructor () {
        console.log('SearchFilterComponent constructor....');
        this.searchObject = new SearchModel();
        this.filterObject = new FilterModel();
    }

    ngOnInit() {
        console.log('on init');
        this.searchObject = new SearchModel();
        this.filterObject = new FilterModel();
        this.onSearchContentChange.emit(this.searchObject);
        this.onFilterContentChange.emit(this.filterObject);
    }

    ngOnChanges() {
        console.log('ng on changes of search filter component');
        this.searchObject = new SearchModel();
        this.filterObject = new FilterModel();
    }

    resetFilterViewHandler() {
        this.ngOnInit();
    }

    searchContentChanged(event: Event, valueChangedFor: string) {
        console.log('searchContentChanged');
        console.log('event => ' + event);
        console.log('valueChangedFor => ' + valueChangedFor);
        //console.log((<HTMLInputElement> event.target).value);
        if (valueChangedFor === 'titleCaseSensitiveChecked') {
            this.searchObject.titleCaseSensitive = (<HTMLInputElement>event.target).checked;
            console.log('title case in search object ==> ' + this.searchObject.titleCaseSensitive);
        } else if (valueChangedFor === 'publisherCaseSensitiveChecked') {
            this.searchObject.publisherCaseSensitive = (<HTMLInputElement>event.target).checked;
            console.log('publisher case in search object ==> ' + this.searchObject.publisherCaseSensitive);
        } else if (valueChangedFor === 'authorCaseSensitiveChecked') {
            this.searchObject.authorCaseSensitive = (<HTMLInputElement>event.target).checked;
            console.log('publisher case in search object ==> ' + this.searchObject.authorCaseSensitive);
        } else if (valueChangedFor === 'titleSearchChanged') {
            this.searchObject.title = event.toString();
            console.log('titleSearchChanged => ' + this.searchObject.title);
        } else if (valueChangedFor === 'authorSearchChanged') {
            this.searchObject.author = event.toString();
            console.log('authorSearchChanged => ' + this.searchObject.author);
        } else if (valueChangedFor === 'publisherSearchChanged') {
            this.searchObject.publisher = event.toString();
            console.log('publisherSearchChanged => ' + this.searchObject.publisher);
        }

        console.log('sending event now...');
        this.onSearchContentChange.emit(this.searchObject);
    }

    filterContentChanged(event: Event, valueChangedFor: string) {

        if (valueChangedFor === 'title') {
            this.filterObject.titleChecked = !this.filterObject.titleChecked;
        } else if (valueChangedFor === 'author') {
            this.filterObject.authorChecked = !this.filterObject.authorChecked;
        } else if (valueChangedFor === 'isbn') {
            this.filterObject.isbnChecked = !this.filterObject.isbnChecked;
        } else if (valueChangedFor === 'publicationDate') {
            this.filterObject.publicationDateChecked = !this.filterObject.publicationDateChecked;
        } else if (valueChangedFor === 'publisher') {
            this.filterObject.publisherChecked = !this.filterObject.publisherChecked;
        } else if (valueChangedFor === 'price') {
            this.filterObject.priceChecked = !this.filterObject.priceChecked;
        } else if (valueChangedFor === 'genre') {
            this.filterObject.genreChecked = !this.filterObject.genreChecked;
        } else if (valueChangedFor === 'format') {
            this.filterObject.formatChecked = !this.filterObject.formatChecked;
        } else if (valueChangedFor === 'operation') {
            this.filterObject.operationChecked = !this.filterObject.operationChecked;
        } else {
            console.log('Something went wrong with filter view');
        }

        console.log('passing the filter object for subscriber...');
        this.onFilterContentChange.emit(this.filterObject);
    }
}
