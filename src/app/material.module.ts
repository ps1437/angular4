import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio'
import {MatInputModule} from '@angular/material/input';.
import {MatSortModule} from '@angular/material/sort';

import {
   MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
   
    MatTooltipModule,
     MatSelectModule

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
     MatRadioModule
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
     MatSortModule
  ]
})
export class MaterialModule {}