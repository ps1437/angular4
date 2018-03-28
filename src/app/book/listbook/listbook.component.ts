import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book} from '../book';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent  {

  books: any[];
  bookDelId : Book;
  constructor(private bookservice : BookService ,  private router: Router 
  ,  private route: ActivatedRoute) { 

    this.books = this.bookservice.viewAllBooks();


  } 

  updateBook(event: Event, book: Book){
    this.router.navigate(['updatebook', book.isbn], {relativeTo: this.route});
  }
 

}
