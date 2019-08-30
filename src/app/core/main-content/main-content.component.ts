import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {OrganizationsDialogComponent} from '../organizations-dialog/organizations-dialog.component';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    this.dialog.open(OrganizationsDialogComponent, {
      width: '1500px',
      height: '950px',
      panelClass: 'custom-modalbox'
    });
  }
}
