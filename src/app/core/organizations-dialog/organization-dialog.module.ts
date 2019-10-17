import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsDialogComponent} from './organizations-dialog.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {AlphabetBarComponent} from '../alphabet-bar/alphabet-bar.component';
import {BorderForAllComponent} from '../border-for-all/border-for-all.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [OrganizationsDialogComponent, SearchBarComponent, AlphabetBarComponent, BorderForAllComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
  ],
  entryComponents: [OrganizationsDialogComponent],
  exports: [OrganizationsDialogComponent, SearchBarComponent, AlphabetBarComponent, BorderForAllComponent]
})
export class OrganizationDialogModule {
}
