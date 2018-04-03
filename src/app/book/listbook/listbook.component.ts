import { Component, Input, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../book';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UpdateComponent } from '../update/update.component';
// import {MatDialog} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { StringUtilService } from '../service/string-util.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent implements OnInit {
  public title: string;
  public author: string;
  public isbn: string;
  public publicationDate: string;
  public publisher: string;
  public price: number;
  public genre: string;
  public bookID: string;
  searchField : string;
  deleteBookID : boolean;


  p: number = 1;
  sortOrder: string = 'asc';
  
  sortfields: Array<String> = [
    'price',
    'title',
    'author'
  ]
  searchList : Array<String> = [
    'title',
    'author',
    'publisher',
    'genre'
  ]


   


  updateBookStatus: boolean = false;
  books: any[];
  bookDelId: Book;

  constructor(private bookservice: BookService, private router: Router
    , private _activeroute: ActivatedRoute, public snackBar: MatSnackBar,
    _utilService: StringUtilService,private toastr: ToastrService) {

    this.books = this.bookservice.viewAllBooks();


  }


  ngOnInit() {
 
  
  }


  updateBook(book: Book) {
    alert(book.bookID);
    if (book.bookID) {
      this.updateBookStatus = true;
    }
    alert(this.updateBookStatus);
    this.router.navigate(['/updatebook', book.bookID], { relativeTo: this._activeroute });
  }



  deleteBook(bookID:string){
    const result = this.bookservice.deleteBook(bookID);
    this.deleteBookID = result;
    if(result ){
      this.books = this.bookservice.viewAllBooks();
      this.toastr.success('', 'Book Deleted Sucessfully');

    }else{
      this.toastr.success('', 'Failed to delete book..');
      
    }
  }



  openSnackBar() {
    this.snackBar.openFromComponent(UpdateComponent, {
      duration: 1000,
    });
  }
  /*
  openDialog() {
      let dialogRef = this.dialog.open(MyDialogComponent, {
        width: '600px',
        data: 'This text is passed into the dialog!'
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialog = result;
      });
    }*/

}
