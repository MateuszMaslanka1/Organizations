import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainContentComponent} from './core/main-content/main-content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
// import {AlphabetBarComponent} from './core/alphabet-bar/alphabet-bar.component';
import {OrganizationDialogModule} from './core/organizations-dialog/organization-dialog.module';


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    // AlphabetBarComponent,
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    OrganizationDialogModule,
  ],
  exports: [MatButtonModule, MatCheckboxModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
  ]
})
export class AppModule { }
