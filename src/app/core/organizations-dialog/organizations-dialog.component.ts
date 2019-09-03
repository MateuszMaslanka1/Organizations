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
  listForObjectKey: string[] = [];
  listForFirstCollumn = [];
  listForSecondCollumn = [];
  listForThirdCollumn = [];
  listForFourthCollumn = [];
  objForListWithDivideElements = [];

  ngOnInit() {
    const quantityOfElementInColumn = this.checkElementsService.lenghtOfColumn(this.nameList);
    this.checkElementsService.sortElement(this.nameList);
    this.listWithAlphabeticGroupName = this.checkElementsService.groupAlphabetically(this.alphabet, this.nameList);
    
    Object.keys(this.listWithAlphabeticGroupName).forEach(el => {
      this.nameList = this.listWithAlphabeticGroupName[el].listWithName;
      this.nameList.forEach(el2 => {
        if (this.listForFirstCollumn.length < quantityOfElementInColumn) {
          this.listForFirstCollumn.push(el2);
        } else if (this.listForSecondCollumn.length < quantityOfElementInColumn) {
          this.listForSecondCollumn.push(el2);
        } else if (this.listForThirdCollumn.length < quantityOfElementInColumn) {
          this.listForThirdCollumn.push(el2);
        } else if (this.listForFourthCollumn.length < quantityOfElementInColumn) {
          this.listForFourthCollumn.push(el2);
        }
      });

      this.objForListWithDivideElements[el] = {
        divideElementListOne: this.listForFirstCollumn,
        divideElementListTwo: this.listForSecondCollumn,
        divideElementListThree: this.listForThirdCollumn,
        divideElementListFour: this.listForFourthCollumn,
      };
      console.log(this.objForListWithDivideElements);
      this.listForObjectKey.push(el);
      this.listForFirstCollumn = [];
      this.listForSecondCollumn = [];
      this.listForThirdCollumn = [];
      this.listForFourthCollumn = [];
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
