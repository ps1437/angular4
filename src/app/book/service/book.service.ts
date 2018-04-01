import { Injectable } from '@angular/core';
import { Book } from '../book';
@Injectable()
export class BookService {

    bookGenres: string[] = [
        'Comedy',
        'Drama',
        'Horror Fiction',
        'Literary Realism',
        'Romance',
        'Satire',
        'Tragedy',
        'Tragicomedy',
        'Fantasy',
        'Mythology',
        'Science',
        'Others'
    ];


    books = [
        {
            title: 'Sita - Warrior of Mithila',
            author: 'B',
            isbn: '1-234-14533-4',
            publicationDate: '2017-05-29',
            publisher: 'Mcraw Hills Publications Pvt. Ltd.',
            price: 320,
            genre: 'Mythology',
            bookID: '0002132123'
        },
         {
            title: 'AAAASita - Warrior of Mithila',
            author: 'A',
            isbn: '1-234-14533-4',
            publicationDate: '2017-05-29',
            publisher: 'Mcraw Hills Publications Pvt. Ltd.',
            price: 380,
            genre: 'Mythology',
            bookID: 'dsadasdasdsadsad'
        },
         {
            title: 'Sita - Warrior of Mithila',
            author: 'C',
            isbn: '1-234-14533-4',
            publicationDate: '2017-05-29',
            publisher: 'Mcraw Hills Publications Pvt. Ltd.',
            price: 320,
            genre: 'Mythology',
            bookID: '00021da32123'
        }];

    getAllBookGenres(): string[] {
        return this.bookGenres;
    }

    viewAllBooks(): any[] {
        return this.books;
    }



    addBooks(book): boolean {
        console.log('addBooks... adding book');
        this.books.push({
            title: book.title,
            price: book.price,
            author: book.author,
            publicationDate: book.isbn,
            genre: book.genre,
            publisher: book.publisher,
            isbn: book.isbn,
            bookID: book.title.charAt(0) + book.author.charAt(0) + ':' + book.isbn
        });
        return true;

    }


deleteBook(bookID):boolean{

        let delBook = false;
        console.log('deleteBook=> ' +bookID);
        try {
            for (let ibook = 0; ibook < this.books.length; ibook++) {
                if (this.books[ibook].bookID.match(bookID)) {
                  this.books.slice(this.books.indexOf(bookID),2);
                    delBook = true;
                    break;
                }
            }
        } catch (err) {
            console.log('error in updatebookdetails of book service');
        }
        return delBook;

}
    updateBook(book): boolean {
        let updated = false;
        console.log('Updating book with id => ' + book.bookID);
        try {
            for (let ibook = 0; ibook < this.books.length; ibook++) {
                if (this.books[ibook].bookID === book.bookID) {
                    console.log('setting book id as : ' + book.title.charAt(0) + ':' + book.author.charAt(0) + ':' + book.isbn);
                    this.books[ibook].bookID = book.title.charAt(0) + ':' + book.author.charAt(0) + ':' + book.isbn;
                    this.books[ibook].title = book.title;
                    this.books[ibook].author = book.author;
                    this.books[ibook].isbn = book.isbn;
                    this.books[ibook].price = book.price;
                    this.books[ibook].publicationDate = book.publicationDate;
                    this.books[ibook].publisher = book.publisher;
                    updated = true;
                    break;
                }
            }
        } catch (err) {
            console.log('error in updatebookdetails of book service');
        }
        return updated;
    }



 getBookWithBookID(bookId: string): Book {
        let resBook: Book;
        try {
            for (const book of this.books) {
                if (book.bookID.match(bookId)) {
                    resBook = book;
                    break;
                }
            }
            return resBook;
        } catch (err) {
            console.log('something went wrong in getBookWithBookID() of book service');
        }
 }

}
