import { Injectable } from '@angular/core';

import {Http} from "@angular/http";
@Injectable()
export class BookService {

  constructor(private https: Http) { }

 getBookData(){
   this.https.get('src/app/data/book.json').subscribe(
    (data) => console.log(data)

   );
 }

}
