import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './book/update/update.component';
import { ListbookComponent } from './book/listbook/listbook.component';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { BookPipe } from './book/validate/book.pipe';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BookHomeComponent } from './book/book-home/book-home.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AppNavRoutingModule } from './app-nav/app-nav-routing.module';
import { StringUtilService } from './book/service/string-util.service';
import { AuthGuard } from './book/service/auth.guard';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { BookService } from './book/service/book.service';
import { MaterialModule } from './material.module';
import { MyDialogComponent } from './book/my-dialog/my-dialog.component'
import { HomeComponent } from './book/home/home.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortByPipe } from '../app/book/pipe/sort-by.pipe'
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './book/pipe/search.pipe'
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    MyDialogComponent,
    UpdateComponent,
    ListbookComponent,
    BookPipe,
    HeaderComponent,
    FooterComponent,
    BookHomeComponent,
    HomeComponent,
    ProfileComponent,
    ContactUsComponent,
    SortByPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppNavRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpModule, HttpClientModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      enableHtml: true,
      tapToDismiss: true,
      preventDuplicates: true
    })

  ],
  providers: [AuthGuard, BookService, StringUtilService],
  bootstrap: [AppComponent],
})
export class AppModule { }
