import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from '../book/addbook/addbook.component';
import { UpdateComponent } from '../book/update/update.component';
import { ListbookComponent } from '../book/listbook/listbook.component';
import { Book } from '../book/book';
import { BookHomeComponent } from '../book/book-home/book-home.component';
import { HomeComponent } from '../book/home/home.component';
import { ProfileComponent } from '../home/profile/profile.component';
import { ContactUsComponent } from '../home/contact-us/contact-us.component';
import { AuthGuard } from '../book/service/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bookHome', component: BookHomeComponent },
 { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addBook', component: AddbookComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'view', component: ListbookComponent },
  { path: 'updatebook/:bookId', component: UpdateComponent }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppNavRoutingModule { }
