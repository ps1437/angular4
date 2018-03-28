import { Component, Renderer2, ElementRef, HostListener } from '@angular/core';
import { BookService } from '../../services/book.service';

import { SearchModel } from '../../models/search.model';
import { FilterModel } from '../../models/filter.model';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book.model';


@Component({
    selector: 'app-book-viewbook',
    templateUrl: './view-book.component.html',
    styleUrls: ['./view-book.component.css']
})

export class ViewBookComponent {

    books: any[];
    filteredBooks: any[];
    bookToDelete: Book;

    // show filters button flags
    showSearchFieldFilterView = false;
    // showFilterView: boolean = false;

    // search object
    searchObject: SearchModel;
    filterObject: FilterModel;

    constructor (
        private _bookService: BookService,
        private _router: Router,
        private _route: ActivatedRoute,
        private renderer: Renderer2,
        private elRef: ElementRef) {
        console.log('view book constructor..');
        this.books = this._bookService.viewAllBooks();
        // console.log('search object ' + this.searchObject.titleCaseSensitive);
    }

    toggleSearchFieldFilterViewHandler() {
        this.showSearchFieldFilterView = !this.showSearchFieldFilterView;
    }

    updateBookButtonHandler(event: Event, book: Book) {
        console.log('updateBookButtonHandler..');
        console.log('Book id selected to update => ' + book.bookID);
        console.log('this.route is ');
        console.log(this._route);
        this._router.navigate(['updatebook', book.bookID], {relativeTo: this._route});
        // this._router.navigate(['updatebooks', book.bookID]);
    }
    deleteBookButtonHandler(event: Event, book: Book) {
        console.log('deleteBookButtonHandler');
        console.log('Book id selected to delete => ' + book.bookID);
        this.bookToDelete = book;
    }

    deleteSelectedBookHandler(event: Event) {
        console.log('deleteSelectedBookHandler of view book component');
        const bookToDelete: Book[] = [];
        bookToDelete.push(this.bookToDelete);
        if (this._bookService.deleteBooksWithBookIDs(bookToDelete)) {
            console.log('Book with book id (' + this.bookToDelete.bookID + ') deleted successfully!');
            this.books = this._bookService.getAllBooksWithTitleAuthorAndPublisher(this.searchObject.title,
                this.searchObject.titleCaseSensitive,
                this.searchObject.author,
                this.searchObject.authorCaseSensitive,
                this.searchObject.publisher,
                this.searchObject.publisherCaseSensitive);
        } else {
            console.log('Book with book id (' + this.bookToDelete.bookID + ') failed to deleted!');
        }
    }

    focusOnBookRow(event: Event, book: Book) {
        // console.log('focusOnBookRow');
        console.log('Focus is on book with book id => ' + book.bookID);
        // console.log(event);
        // (<HTMLTableRowElement>event.srcElement).style.fontWeight = 'bold';
        // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'bold');
        // this.elRef.nativeElement.style.fontWeight = 'bold';
    }

    blurFromBookRow(event: Event, book: Book) {
        // console.log('blurFromBookRow');
        console.log('Focus lost from book with book id =>' + book.bookID);
        // (<HTMLTableRowElement>event.srcElement).style.fontWeight = 'normal';
        // this.renderer.setStyle(this.elRef.nativeElement, 'font-weight', 'normal');
        // this.elRef.nativeElement.style.fontWeight = 'normal';
    }

    onSearchContentChange(searchObject: SearchModel) {
        console.log('onSearchObjectChange of view component ..... ');
        console.log(searchObject);
        this.searchObject = searchObject;
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

}
