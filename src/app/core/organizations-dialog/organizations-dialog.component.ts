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
  nameList = ['asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'o', 'op', 'r', 'cvb', 'fgh', 'ghj', 'jkl',
    'asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'asd', 'palm', 'part', 'pond', 'prevalent', 'paris',
    'pins', 'pretense', 'asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'asd', 'palm', 'part', 'pond',
    'prevalent', 'paris', 'pins', 'pretense', 'l',
    'wsd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'asd', 'palm', 'part', 'pond', 'prevalent', 'paris',
    'wins', 'wretense', 'asd', 'walm', 'part', 'wond', 'prevalent', 'paris', 'wins', 'pretense'];
  listWithAlphabeticGroupName = {};
  listForFirstCollumn = [];
  listForSecondCollumn = [];
  listForThirdCollumn = [];
  listForFourthCollumn = [];
  objForListWithDivideElements = [];
  alphabetForCollumn = [];
  wordsToFind: string;

  ngOnInit() {
    this.sortName();
    this.groupAlphabeticlly();
    this.divideInCollumn();
  }

  sortName() {
    this.checkElementsService.sortElement(this.nameList);
  }

  groupAlphabeticlly() {
    this.listWithAlphabeticGroupName = this.checkElementsService.groupAlphabetically(this.alphabet, this.nameList);
    Object.keys(this.listWithAlphabeticGroupName).forEach(el => {
      this.alphabetForCollumn.push(el);
    });
  }

  divideInCollumn() {
    Object.keys(this.listWithAlphabeticGroupName).forEach(el => {
      const quantityOfElementInColumn = this.checkElementsService.lenghtOfColumn(this.listWithAlphabeticGroupName[el].listWithName);
      this.listWithAlphabeticGroupName[el].listWithName.forEach(el2 => {
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
      this.listForFirstCollumn = [];
      this.listForSecondCollumn = [];
      this.listForThirdCollumn = [];
      this.listForFourthCollumn = [];
    });
  }

  findWords() {
    this.objForListWithDivideElements = [];
    this.alphabetForCollumn = [];
    const listWithFindWords = this.checkElementsService.findWords(this.wordsToFind, this.nameList);
    this.checkElementsService.sortElement(listWithFindWords);
    this.listWithAlphabeticGroupName = this.checkElementsService.groupAlphabetically(this.alphabet, listWithFindWords);
    Object.keys(this.listWithAlphabeticGroupName).forEach(el => {
      console.log(el);
      this.alphabetForCollumn.push(el);
    });
    this.divideInCollumn();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
