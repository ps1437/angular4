import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {NgForm} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
 import {Book} from '../book' ;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private bookService :BookService,
  private _router: Router,
        private _activatedRoute: ActivatedRoute,
       ) { }

  ngOnInit() {
alert(this._activatedRoute.snapshot.params['bookId']);
  const book: Book = this.bookService.getBookWithBookID(this._activatedRoute.snapshot.params['bookId'])
  alert(book.price);

  }

 updateBook(books ,form: NgForm){

   const result = this.bookService.updateBook(books);
   if(result){
     alert("Book Updated sucessfully");
     this.bookService.viewAllBooks();
   }else{
     alert("failed to Updated");
   }

 }

}
