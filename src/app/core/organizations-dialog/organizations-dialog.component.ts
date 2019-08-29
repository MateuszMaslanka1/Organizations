import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-organizations-dialog',
  templateUrl: './organizations-dialog.component.html',
  styleUrls: ['./organizations-dialog.component.scss']
})
export class OrganizationsDialogComponent implements OnInit {

  constructor() { }

  ngOnInit(public dialogRef: MatDialogRef<OrganizationsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
  }

}
