import { Component, OnInit, OnDestroy } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

// services
import { BookService } from '../../../services/book.service';

import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Book } from '../../../models/book.model';

@Component({
    selector: 'app-book-updatebook',
    templateUrl: './update-book.component.html',
    styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit, OnDestroy {

    updateBookForm: FormGroup;
    bookGenres: string[];
    bookFormats: string[];

    bookToUpdate: Book;

    // bookToUpdateSubcriber: Subscription;

    constructor(private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _bookService: BookService) {
        console.log('constructor of update book component');
        console.log(_activatedRoute.pathFromRoot.toString());
        console.log(_activatedRoute.pathFromRoot[0].toString());
        this.bookFormats = this._bookService.getAllBookFormats();
        this.bookGenres = this._bookService.getAllBookGenres();
        // this.bookToUpdateSubcriber = this._bookService.bookToUpdate.subscribe(
        //     (book: Book) => {
        //         console.log('got book object from subject');
        //         this.book = book;
        //     },
        //     (err) => {
        //         console.log('inside error block of subscriber');
        //     },
        //     () => {
        //         console.log('inside completed block for subscriber');
        //     }
        // );
        // this.book = _bookService.getBookWithBookID(_activatedRoute.snapshot.params['bookId']);
        // if (this.book == null) {
        //     console.log('not able to find the book details with book id : ' + _activatedRoute.snapshot.params['bookId']);
        // } else {
        //     console.log('book id found : ' + this.book.bookID);
        // }
    }

    ngOnInit() {
        console.log('ngOnInit of update book component');
        this.updateBookForm = new FormGroup({
            'title': new FormControl(null, [Validators.required, this.minLength1Validator.bind(this)]),
            'author': new FormControl(null, [Validators.required, this.minLength1Validator.bind(this)]),
            'isbn': new FormControl(null, [Validators.required, this.isbnFormatValidator.bind(this)]),
            'publicationDate': new FormControl(null, [Validators.required, this.publicationDateValidator.bind(this)]),
            'publisher': new FormControl(null, [Validators.required, this.minLength1Validator.bind(this)]),
            'price': new FormControl(null, [Validators.required, Validators.min(0)]),
            'genre': new FormControl('--Select--', [Validators.required, this.listItemValidator.bind(this)]),
            'format': new FormControl('--Select--', [Validators.required, this.listItemValidator.bind(this)])
        });

        console.log(this.updateBookForm);
        try {
            const book: Book = this._bookService.getBookWithBookID(this._activatedRoute.snapshot.params['bookId']);
            if (book == null) {
                console.log('not able to find the book details with book id : ' + this._activatedRoute.snapshot.params['bookId']);
            } else {
                console.log('book id found : ' + book.bookID);
                this.updateBookForm.setValue({
                    'title': book.title,
                    'author': book.author,
                    'isbn': book.ISBN,
                    'publicationDate': book.publicationDate,
                    'publisher': book.publisher,
                    'price': book.price,
                    'genre': (this.bookGenres.includes(book.genre) ? book.genre : '--Select--'),
                    'format': (this.bookFormats.includes(book.format) ? book.format : '--Select--')
                });
            }
        } catch (err) {
            console.log('error block of ngoninit of update book component');
        }
    }

    ngOnDestroy() {
        // this.bookToUpdateSubcriber.unsubscribe();
    }

    goBackButtonClickedHandler() {
        console.log('this . route in update book component is ');
        console.log(this._activatedRoute);
        console.log('url ');
        console.log(this._activatedRoute.url);
        this._router.navigate(['../../'], { relativeTo: this._activatedRoute });
    }

    updateBookButtonHandler(event: Event) {
        console.log('updateBookButtonHandler of update book component');
        try {
            if (this._bookService.updateBookDetails(this.bookToUpdate)) {
                alert('Book updated successfully');
                console.log('updated');
                this._router.navigate(['../../'], { relativeTo: this._activatedRoute });
            } else {
                alert('Failed to update the book');
            }
        } catch (err) {
            console.log('catch block of updateBookButtonHandler of update book component');
        }

    }

    restoreOriginalButtonClickHandler(event: Event) {
        this.ngOnInit();
    }


    updateBookFormSubmit() {
        console.log('updateBookFormSubmit... updating book');
        this.bookToUpdate = new Book();
        this.bookToUpdate.bookID = this._activatedRoute.snapshot.params['bookId'];
        this.bookToUpdate.ISBN = this.updateBookForm.get('isbn').value;
        this.bookToUpdate.author = this.updateBookForm.get('author').value;
        this.bookToUpdate.format = this.updateBookForm.get('format').value;
        this.bookToUpdate.genre = this.updateBookForm.get('genre').value;
        this.bookToUpdate.price = this.updateBookForm.get('price').value;
        this.bookToUpdate.publicationDate = this.updateBookForm.get('publicationDate').value;
        this.bookToUpdate.publisher = this.updateBookForm.get('publisher').value;
        this.bookToUpdate.title = this.updateBookForm.get('title').value;
    }

    minLength1Validator(formControl: FormControl): { [key: string]: boolean } {
        console.log('minLength1Validator');
        // this.addBookForm.patchValue({
        //     formControl: formControl.value.trim()
        // });

        if (formControl.value != null && formControl.value.trim().length < 1) {
            return { 'minLength1': true };
        }
        return null;
    }

    isbnFormatValidator(formControl: FormControl): { [key: string]: boolean } {
        console.log('isbnFormatValidator');
        if (formControl.value != null) {
            const isbn = formControl.value.trim();
            if (isbn.length !== 13) {
                return { 'isbnValid': true };
            }
            for (let i = 0; i < isbn.length; i++) {
                if ((i !== 1) && (i !== 5) && (i !== 11) && isNaN(isbn.charAt(i))) {
                    return { 'isbnValid': true };
                }
                if ((i === 1 || i === 5 || i === 11) && isbn.charAt(i) !== '-') {
                    return { 'isbnValid': true };
                }
            }
        }
        return null;
    }
    listItemValidator(formControl: FormControl): { [key: string]: boolean } {
        console.log('listSelectionValidator');
        console.log(formControl);
        if (formControl.value === '--Select--') {
            return { 'defaultSelected': true };
        }
        return null;
    }

    publicationDateValidator(formControl: FormControl): { [key: string]: boolean } {
        console.log('publicationDateValidator');
        console.log(formControl.value);
        const date: Date = new Date(formControl.value);
        console.log('date entered');
        console.log(date);
        console.log('system date is');
        const currDate = new Date();
        console.log(currDate);

        if (date > currDate) {
            console.log('publication date is greater than today\'s date');
            return { 'invalidPublicationDate': true };
        }
        return null;
    }
    resetOriginalButtonClickedHandler() {
        console.log('resetting original values in form');
        this.ngOnInit();
    }

    clearFormButtonClickedHandler() {
        this.updateBookForm.reset();
        this.updateBookForm.patchValue({
            'genre': '--Select--',
            'format': '--Select--'
        });
    }
}
