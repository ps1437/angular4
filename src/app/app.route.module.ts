import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ViewBookComponent } from './book/viewbook/view-book.component';
import { AddBookComponent } from './book/addbook/add-book.component';
import { UpdateBooksComponent } from './book/updatebooks/update-books.component';
import { DeleteBooksComponent } from './book/deletebooks/delete-books.component';
import { UpdateBookComponent } from './book/updatebooks/updatebook/update-book.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'viewbooks', component: ViewBookComponent },
    { path: 'addbook', component: AddBookComponent},
    { path: 'deletebooks', component: DeleteBooksComponent},
    { path: 'updatebooks', component: UpdateBooksComponent},
    { path: 'viewbooks/updatebook/:bookId', component: UpdateBookComponent},
    { path: 'updatebooks/updatebook/:bookId', component: UpdateBookComponent}
];

export const RouteModule = RouterModule.forRoot(appRoutes);
