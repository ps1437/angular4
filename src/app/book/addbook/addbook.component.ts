import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  bookGenres: string[];
 
  constructor(private bookservice : BookService ) { }

  ngOnInit() {
    
     this.bookGenres = this.bookservice.getAllBookGenres();
    
     
  }

viewAllBooks(){
    const books: any[] = this.bookservice.viewAllBooks();
}

  addBook(books ,form: NgForm){

    const success: boolean = this.bookservice.addBooks(books);
    if(success){
      alert("Book added Sucessfully")
      form.reset();
    }else
    {
      alert("Failed to  add")
      
    }
  }
}
