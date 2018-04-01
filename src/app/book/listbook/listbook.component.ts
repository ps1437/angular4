import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../book';
import { NgModel } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { UpdateComponent } from '../update/update.component';
// import {MatDialog} from '@angular/material';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import {StringUtilService} from '../service/string-util.service';
@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent {
  public title: string;
  public author: string;
  public isbn: string;
  public publicationDate: string;
  public publisher: string;
  public price: number;
  public genre: string;
  public bookID: string;
   p: number = 1;
   sortOrder : string = 'asc';
  sortfields: Array<String> = [
    'price',
    'title',
    'author'
  ]
  books: any[];
  bookDelId: Book;
  constructor(private bookservice: BookService, private router: Router
    , private route: ActivatedRoute, public snackBar: MatSnackBar,
     _utilService : StringUtilService) {

    this.books = this.bookservice.viewAllBooks();


  }

  updateBook(event: Event, book: Book) {
    this.router.navigate(['/updatebook', book.bookID], { relativeTo: this.route });
  }

  deleteBook(bookID: string) {
    const bookStatus = this.bookservice.deleteBook(bookID);
    if (bookStatus) {
      this.books = this.bookservice.viewAllBooks();
      alert("Book Deleted Sucessfully...")
    } else {
      alert("Book failed   Sucessfully...")

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
