import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { FormsModule } from '@angular/forms';

import { UpdateComponent } from './book/update/update.component';
import { ListbookComponent } from './book/listbook/listbook.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'; import { HttpModule } from '@angular/http';
import { BookPipe } from './book/validate/book.pipe';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { BookHomeComponent } from './book/book-home/book-home.component';

import { AboutComponent } from './home/about/about.component';
import { ProfileComponent } from './home/profile/profile.component';
import { AppNavRoutingModule } from './app-nav/app-nav-routing.module';
import { LoginService } from './book/service/login.service';
import { StringUtilService } from './book/service/string-util.service';

import { AuthGuard } from './book/service/auth.guard';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { BookService } from './book/service/book.service';
import { MaterialModule } from './material.module';
import { MyDialogComponent } from './book/my-dialog/my-dialog.component'
import { HomeComponent } from './book/home/home.component'
import { LoginPageComponent } from './login/login-page/login-page.component'
import { LoginModelComponent } from './login/login-model/login-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortByPipe } from '../app/book/pipe/sort-by.pipe'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddbookComponent,
    MyDialogComponent,
    UpdateComponent,
    ListbookComponent,
    RegisterComponent,
    LoginPageComponent,
    LoginModelComponent,
    BookPipe,
    HeaderComponent,
    FooterComponent,
    BookHomeComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    ContactUsComponent,
    SortByPipe
    
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppNavRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
HttpModule,HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [LoginService, AuthGuard, BookService,StringUtilService],
  bootstrap: [AppComponent],
  entryComponents: [LoginModelComponent]
})
export class AppModule { }
