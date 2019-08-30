import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CheckElementsService} from './check-elements.service';

@Component({
  selector: 'app-organizations-dialog',
  templateUrl: './organizations-dialog.component.html',
  styleUrls: ['./organizations-dialog.component.scss']
})
export class OrganizationsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrganizationsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private checkElementsService: CheckElementsService) { }

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
  dataWithName = ['out', 'over', 'oversimplify'];

  ngOnInit() {
    this.checkElementsService.checkElement();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
