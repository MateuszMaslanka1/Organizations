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
  nameList = ['asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense'];
  listWithAlphabeticGroupName = {};
  listForObjectKey: string[];
  listForFirstCollumn = [];
  listForSecondCollumn = [];
  listForThirdCollumn = [];
  listForFourthCollumn = [];

  ngOnInit() {
    const quantityOfElementInColumn = this.checkElementsService.lenghtOfColumn(this.nameList);
    this.checkElementsService.sortElement(this.nameList);
    this.listWithAlphabeticGroupName = this.checkElementsService.divideOnAlphabeticGroup(this.alphabet, this.nameList);
    console.log(this.listForObjectKey = Object.keys(this.listWithAlphabeticGroupName));

    this.nameList.forEach(el => {
      if (this.listForFirstCollumn.length < quantityOfElementInColumn) {
        this.listForFirstCollumn.push(el);
      } else if (this.listForSecondCollumn.length < quantityOfElementInColumn) {
        this.listForSecondCollumn.push(el);
      } else if (this.listForThirdCollumn.length < quantityOfElementInColumn) {
        this.listForThirdCollumn.push(el);
      } else if (this.listForFourthCollumn.length < quantityOfElementInColumn) {
        this.listForFourthCollumn.push(el);
      }
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
