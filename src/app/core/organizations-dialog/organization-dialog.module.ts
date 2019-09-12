import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrganizationsDialogComponent} from './organizations-dialog.component';
import {SearchBarComponent} from '../search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [OrganizationsDialogComponent, SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  entryComponents: [OrganizationsDialogComponent],
  exports: [OrganizationsDialogComponent, SearchBarComponent]
})
export class OrganizationDialogModule {
}
