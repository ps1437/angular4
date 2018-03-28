import { Book } from '../models/book.model';


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

    bookFormats: string[] = [
        'Hardcover',
        'Paperback',
        'E-book',
        'Audiobook',
        'Folio',
        'Chapbook',
        'Others'
    ];

    books = [
        {
            bookID: '2:C:1-234-12345-1',
            title: '2 States',
            author: 'Chetan Bhagat',
            ISBN: '1-234-12345-1',
            publicationDate: '2017-10-20',
            publisher: 'Penguin Publications',
            price: 230,
            genre: 'Romance',
            format: 'Paperback'
        },
        {
            bookID: 'H:C:1-234-14536-1',
            title: 'Half Girlfriend',
            author: 'Chetan Bhagat',
            ISBN: '1-234-14536-1',
            publicationDate: '2015-10-23',
            publisher: 'Red Hills Publications',
            price: 200,
            genre: 'Drama',
            format: 'Paperback'
        },
        {
            bookID: 'T:P:1-234-14531-2',
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            ISBN: '1-234-14531-2',
            publicationDate: '2003-01-16',
            publisher: 'HarperCollins',
            price: 430,
            genre: 'Fantasy',
            format: 'Paperback'
        },
        {
            bookID: 'E:P:1-234-14537-2',
            title: 'Eleven Minutes',
            author: 'Paulo Coelho',
            ISBN: '1-234-14537-2',
            publicationDate: '2003-01-16',
            publisher: 'HarperCollins',
            price: 350,
            genre: 'Romance',
            format: 'Paperback'
        },
        {
            bookID: 'T:A:1-234-14539-3',
            title: 'The Immortals of Meluha',
            author: 'Amish Tripathi',
            ISBN: '1-234-14539-3',
            publicationDate: '2010-01-16',
            publisher: 'Mcraw Hills Publications Pvt. Ltd.',
            price: 450,
            genre: 'Fantasy',
            format: 'Audiobook'
        },
        {
            bookID: 'S:A:1-234-14533-4',
            title: 'Sita - Warrior of Mithila',
            author: 'Amish Tripathi',
            ISBN: '1-234-14533-4',
            publicationDate: '2017-05-29',
            publisher: 'Mcraw Hills Publications Pvt. Ltd.',
            price: 320,
            genre: 'Mythology',
            format: 'Hardcover'
        },
        {
            bookID: 'I:T:9-718-03384-8',
            title: 'Intro to Algorithms',
            author: 'Thomas H. Cormen',
            ISBN: '9-718-03384-8',
            publicationDate: '1989-01-16',
            publisher: 'MIT Press',
            price: 970,
            genre: 'Science',
            format: 'Hardcover'
        }
    ];


    addBook(title: string,
        author: string,
        ISBN: string,
        publicationDate: string,
        publisher: string,
        price: number,
        genre: string,
        format: string): boolean {
        if (this.books == null) {
            this.books = [];
        }
        if (!this.bookGenres.includes(genre)) {
            genre = this.bookGenres[this.bookGenres.length - 1];
        }
        if (!this.bookFormats.includes(format)) {
            format = this.bookFormats[this.bookFormats.length - 1];
        }
        if (this.books.push({
            bookID: title.charAt(0) + ':' + author.charAt(0) + ':' + ISBN,
            title: title, author: author, ISBN: ISBN, publicationDate: publicationDate, publisher: publisher,
            price: price, genre: genre, format: format
        })) {
            return true;
        } else {
            return false;
        }
    }

    viewAllBooks(): any[] {
        return this.books;
    }

    getAllBooksWithTitleAuthorAndPublisher(
        titleString: string,
        titleCaseSensitive: boolean,
        authorString: string,
        authorCaseSensitive: boolean,
        publisherString: string,
        publisherCaseSensitive: boolean): any[] {
        const tBooks = [];
        const taBooks = [];
        const tapBooks = [];
        console.log('Searching for  title = "' + titleString + '" = ' + titleCaseSensitive +
            ' and author = "' + authorString + '" = ' + authorCaseSensitive + 'publisher = "' + publisherString + '" ' +
            publisherCaseSensitive);
        if (!titleCaseSensitive) {
            titleString = titleString.toUpperCase();
            for (const book of this.books) {
                const bookTitle: string = book.title.toUpperCase();
                if (bookTitle.includes(titleString)) {
                    // console.log(titleString + ' matched with ' + book.title);
                    tBooks.push({
                        bookID: book.bookID,
                        title: book.title,
                        author: book.author,
                        ISBN: book.ISBN,
                        publicationDate: book.publicationDate,
                        publisher: book.publisher,
                        price: book.price,
                        genre: book.genre,
                        format: book.format
                    });
                }
            }
        } else {
            for (const book of this.books) {
                if (book.title.includes(titleString)) {
                    // console.log(titleString + ' matched with ' + book.title);
                    tBooks.push({
                        bookID: book.bookID,
                        title: book.title,
                        author: book.author,
                        ISBN: book.ISBN,
                        publicationDate: book.publicationDate,
                        publisher: book.publisher,
                        price: book.price,
                        genre: book.genre,
                        format: book.format
                    });
                }
            }
        }
        // console.log('starting with author search...');
        // author search futher
        if (!authorCaseSensitive) {
            authorString = authorString.toUpperCase();
            for (const book of tBooks) {
                const bookAuthor: string = book.author.toUpperCase();
                if (bookAuthor.includes(authorString)) {
                    // console.log(authorString + ' matched with ' + book.author);
                    taBooks.push({
                        bookID: book.bookID,
                        title: book.title,
                        author: book.author,
                        ISBN: book.ISBN,
                        publicationDate: book.publicationDate,
                        publisher: book.publisher,
                        price: book.price,
                        genre: book.genre,
                        format: book.format
                    });
                }
            }
        } else {
            for (const book of tBooks) {
                const bookAuthor: string = book.author;
                if (bookAuthor.includes(authorString)) {
                    // console.log(authorString + ' matched with ' + book.author);
                    taBooks.push({
                        bookID: book.bookID,
                        title: book.title,
                        author: book.author,
                        ISBN: book.ISBN,
                        publicationDate: book.publicationDate,
                        publisher: book.publisher,
                        price: book.price,
                        genre: book.genre,
                        format: book.format
                    });
                }
            }
        }

        // console.log('starting with publisher search...');
        // publisher search futher
        if (!publisherCaseSensitive) {
            publisherString = publisherString.toUpperCase();
            for (const book of taBooks) {
                const bookpublisher: string = book.publisher.toUpperCase();
                if (bookpublisher.includes(publisherString)) {
                    // console.log(publisherString + ' matched with ' + book.publisher);
                    tapBooks.push({
                        bookID: book.bookID,
                        title: book.title,
                        author: book.author,
                        ISBN: book.ISBN,
                        publicationDate: book.publicationDate,
                        publisher: book.publisher,
                        price: book.price,
                        genre: book.genre,
                        format: book.format
                    });
                }
            }
        } else {
            for (const book of taBooks) {
                const bookpublisher: string = book.publisher;
                if (bookpublisher.includes(publisherString)) {
                    // console.log(publisherString + ' matched with ' + book.publisher);
                    tapBooks.push({
                        bookID: book.bookID,
                        title: book.title,
                        author: book.author,
                        ISBN: book.ISBN,
                        publicationDate: book.publicationDate,
                        publisher: book.publisher,
                        price: book.price,
                        genre: book.genre,
                        format: book.format
                    });
                }
            }
        }

        return tapBooks;
    }

    deleteAllBooks(): boolean {
        this.books = null;
        return true;
    }

    deleteBooksWithBookIDs(booksToDelete: Book[]): boolean {
        console.log('Book service method deleteBooksWithBookIDs...');
        let deleted = true;
        for (const bookToDelete of booksToDelete) {
            try {
                for (const book of this.books) {
                    if (book.bookID.match(bookToDelete.bookID)) {
                        this.books.splice(this.books.indexOf(book), 1);
                        break;
                    }
                }
            } catch (err) {
                console.log('Something went wrong while deleting the books one by one...');
                deleted = false;
                break;
            }
        }
        return deleted;
    }

    updateBookDetails(book: Book): boolean {
        let updated = false;
        console.log('Updating book with id => ' + book.bookID);
        try {
            for (let ibook = 0; ibook < this.books.length; ibook++) {
                if (this.books[ibook].bookID === book.bookID) {
                    console.log('setting book id as : ' + book.title.charAt(0) + ':' + book.author.charAt(0) + ':' + book.ISBN);
                    this.books[ibook].bookID = book.title.charAt(0) + ':' + book.author.charAt(0) + ':' + book.ISBN;
                    this.books[ibook].title = book.title;
                    this.books[ibook].author = book.author;
                    if (!this.bookFormats.includes(book.format)) {
                        this.books[ibook].format = this.bookFormats[this.bookFormats.length - 1 ];
                    } else {
                        this.books[ibook].format = book.format;
                    }
                    if (!this.bookGenres.includes(book.genre)) {
                        this.books[ibook].genre = this.bookGenres[this.bookGenres.length - 1 ];
                    } else {
                        this.books[ibook].genre = book.genre;
                    }
                    this.books[ibook].ISBN = book.ISBN;
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

    getAllBookFormats(): string[] {
        return this.bookFormats;
    }
    getAllBookGenres(): string[] {
        return this.bookGenres;
    }
}
