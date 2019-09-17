import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsDialogComponent} from './organizations-dialog.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {AlphabetBarComponent} from '../alphabet-bar/alphabet-bar.component';


@NgModule({
  declarations: [OrganizationsDialogComponent, SearchBarComponent, AlphabetBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  entryComponents: [OrganizationsDialogComponent],
  exports: [OrganizationsDialogComponent, SearchBarComponent, AlphabetBarComponent]
})
export class OrganizationDialogModule {
}
