export class SearchModel {
    public title: string;
    public author: string;
    public publisher: string;
    public titleCaseSensitive: boolean;
    public authorCaseSensitive: boolean;
    public publisherCaseSensitive: boolean;

    constructor() {
        this.title = '';
        this.author = '';
        this.publisher = '';
        this.titleCaseSensitive = false;
        this.authorCaseSensitive = false;
        this.publisherCaseSensitive = false;
    }
}