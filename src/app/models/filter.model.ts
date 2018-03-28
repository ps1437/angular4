export class FilterModel {
    public titleChecked: boolean;
    public authorChecked: boolean;
    public isbnChecked: boolean;
    public publicationDateChecked: boolean;
    public publisherChecked: boolean;
    public priceChecked: boolean;
    public genreChecked: boolean;
    public formatChecked: boolean;
    public operationChecked: boolean;

    constructor() {
        this.titleChecked = true;
        this.authorChecked = true;
        this.isbnChecked = true;
        this.publicationDateChecked = true;
        this.publisherChecked = true;
        this.priceChecked = true;
        this.genreChecked = true;
        this.formatChecked = true;
        this.operationChecked = true;
    }
}
