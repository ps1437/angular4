import { Component, OnChanges, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookService } from '../../services/book.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../../models/book.model';
import { SearchModel } from '../../models/search.model';
import { FilterModel } from '../../models/filter.model';

@Component({
    selector: 'app-book-updatebooks',
    templateUrl: './update-books.component.html',
    styleUrls: ['./update-books.component.css']
})
export class UpdateBooksComponent implements OnChanges, OnInit {

    books: any[] = [];
    bookToUpdate: Book;

    // update variables
    selectedForUpdate = false;

    // show filters button flags
    showSearchFieldFilterView = false;

    // search and filter objects
    searchObject: SearchModel;
    filterObject: FilterModel;


    constructor(private _bookService: BookService,
        private _router: Router,
        private _route: ActivatedRoute) {
        this.books = this._bookService.viewAllBooks();
        console.log('update book constructor..');
        this.bookToUpdate = null;
    }

    ngOnChanges() {
        console.log('onchanges called..');
    }

    ngOnInit() {
        console.log('OnInit of updatebookcomponent');
        this.books = this._bookService.viewAllBooks();
        this.bookToUpdate = null;
    }

    toggleSearchFieldFilterViewHandler(event: Event) {
        this.showSearchFieldFilterView = !this.showSearchFieldFilterView;
    }

    onSearchContentChange(searchObject: SearchModel) {
        console.log('onSearchContentChange');
        this.books = null;
        this.books = this._bookService.getAllBooksWithTitleAuthorAndPublisher(
            searchObject.title, searchObject.titleCaseSensitive,
            searchObject.author, searchObject.authorCaseSensitive,
            searchObject.publisher, searchObject.publisherCaseSensitive);
    }

    onFilterContentChange(filterObject: FilterModel) {
        console.log('onFilterContentChange');
        console.log(filterObject);
        this.filterObject = filterObject;
        console.log(this.filterObject);
    }

    bookRowClicked(book: Book, event: Event) {
        console.log('bookRowClicked..');
        console.log('book id selected => ' + book.bookID);
        console.log(event);
        this.bookToUpdate = book;
    }

    selectedForUpdateHandler() {
        console.log('selectedForUpdateHandler of update books component');
        this.selectedForUpdate = true;
        console.log('this. route in update books component is ');
        console.log(this._route);
        // this._bookService.setBookToUpdate(this.bookToUpdate);
        this._router.navigate(['updatebook', this.bookToUpdate.bookID], {relativeTo: this._route});
    }

}
