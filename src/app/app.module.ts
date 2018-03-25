import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule } from '@angular/material';



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddbookComponent } from './book/addbook/addbook.component';
import { FormsModule } from '@angular/forms';
import { DeletebookComponent } from './book/deletebook/deletebook.component';
import { UpdateComponent } from './book/update/update.component';
import { ListbookComponent } from './book/listbook/listbook.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './book/view/view.component';
import { BookPipe } from './book/validate/book.pipe';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { BookHomeComponent } from './book/book-home/book-home.component';
import { BookCartComponent } from './book/book-cart/book-cart.component';
import { AboutComponent } from './home/about/about.component';
import { ProfileComponent } from './home/profile/profile.component';
import {AppNavRoutingModule} from './app-nav/app-nav-routing.module';
 import {LoginService} from './book/service/login.service';  
import{AuthGuard} from './book/service/auth.guard';
import { ContactUsComponent } from './home/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddbookComponent,
    DeletebookComponent,
    UpdateComponent,
    ListbookComponent,
    RegisterComponent,
    ViewComponent,
    BookPipe,
    HeaderComponent,
    FooterComponent,
    BookHomeComponent,
    BookCartComponent,
    AboutComponent,
    ProfileComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
 BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    AppNavRoutingModule,
    ReactiveFormsModule
  ],
  providers: [LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
