export class Book {
    public bookID: string;
    public title: string;
    public author: string;
    public ISBN: string;
    public publicationDate: string;
    public publisher: string;
    public price: number;
    public genre: string;
    public format: string;

    constructor(
        ) {
            this.bookID = '';
            this.title = '';
            this.author = '';
            this.ISBN = '';
            this.publicationDate = '';
            this.publisher = '';
            this.price = null;
            this.genre = '';
            this.format = '';
        }
}
