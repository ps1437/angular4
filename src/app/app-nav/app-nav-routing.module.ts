import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../login/login.component';

import {AddbookComponent} from '../book/addbook/addbook.component';

import {UpdateComponent} from '../book/update/update.component';

import {ListbookComponent} from '../book/listbook/listbook.component';


import {BookHomeComponent} from '../book/book-home/book-home.component';

import {ProfileComponent} from '../home/profile/profile.component';

import {BookCartComponent} from '../book/book-cart/book-cart.component';
import {AboutComponent} from '../home/about/about.component';
import {RegisterComponent} from '../register/register.component';
import {ContactUsComponent} from '../home/contact-us/contact-us.component';
import {AuthGuard} from '../book/service/auth.guard';
const routes :Routes = [
   { path: '', component: LoginComponent },
   { path: 'bookHome', 
   canActivate :[AuthGuard],
   component: BookHomeComponent },
   { path: 'profile', component: ProfileComponent },
   { path: 'cart', component: BookCartComponent },
   { path: 'about', component: AboutComponent },
   {  path: 'register',component: RegisterComponent},
   { path: 'addBook', component: AddbookComponent },

   { path: 'update', component: UpdateComponent },
    { path: 'contact', component: ContactUsComponent },
   { path: 'view', component: ListbookComponent }
  ]
@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppNavRoutingModule { }
