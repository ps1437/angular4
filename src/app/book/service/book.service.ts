import { Injectable } from '@angular/core';

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
            author: 'Amish Tripathi',
            isbn: '1-234-14533-4',
            publicationDate: '2017-05-29',
            publisher: 'Mcraw Hills Publications Pvt. Ltd.',
            price: 320,
            genre: 'Mythology',
        }];

    getAllBookGenres(): string[] {
        return this.bookGenres;
    }

    viewAllBooks(): any[] {
        return this.books;
    }



    addBooks(book):boolean{
        console.log('addBooks... adding book');
        this.books.push({
            title: book.title,
            price: book.price,
            author:book.author,
            publicationDate:book.publicationDate,
            genre: book.genre,
            publisher:book.publisher,
            isbn:book.isbn
        });
        return true;
       
    }
}
