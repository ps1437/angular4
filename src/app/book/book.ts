export class Book {
      public title: string;
    public author: string;
    public isbn: string;
    public publicationDate: string;
    public publisher: string;
    public price: number;
    public genre: string;
   public bookID: string;
    constructor(
        ) {
            this.title = '';
            this.author = '';
            this.isbn = '';
            this.publicationDate = '';
            this.publisher = '';
            this.price = null;
            this.genre = '';
            this.bookID ='';
        }
}
