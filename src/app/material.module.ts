import { NgModule } from '@angular/core';

import {
   MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule,
   MatDialogModule

} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatSortModule,
    MatRadioModule,
    MatSnackBarModule,MatDialogModule
 
  ],
  exports: [

    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatSelectModule,
    MatSortModule,
    MatSnackBarModule,MatDialogModule
  
  ]
})
export class MaterialModule { }