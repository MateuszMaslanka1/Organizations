import {Component, ElementRef, Inject, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
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
  nameList = ['asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'o', 'op', 'r', 'cvb', 'fgh', 'ghj', 'jkl', 'n',
    'asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'asd', 'palm', 'part', 'pond', 'prevalent', 'paris',
    'pins', 'pretense', 'asd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'asd', 'palm', 'part', 'pond',
    'prevalent', 'paris', 'pins', 'pretense', 'l', 'dom', 'ert', 'tyu', 'uio', 'sdf', 'fgh', 'fgh', 'zxc', 'qwe', 'sdf', 'ert',
    'wsd', 'palm', 'part', 'pond', 'prevalent', 'paris', 'pins', 'pretense', 'asd', 'palm', 'part', 'pond', 'prevalent',
    'wins', 'wretense', 'asd', 'walm', 'part', 'wond', 'wins', 'pretense', 'walm', 'part', 'wond', 'wins',
    'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond',
    'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm',
    'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins', 'walm', 'wond', 'wins'];
  listWithAlphabeticGroupName = {};
  listForFirstCollumn = [];
  listForSecondCollumn = [];
  listForThirdCollumn = [];
  listForFourthCollumn = [];
  objForListWithDivideElements = {};
  alphabetForCollumn = [];
  wordsToFind: string;
  objForChangeColorLetter = {};
  objForChangeColorLine = {};
  line: string;
  letter: string;
  @ViewChildren('smallLetterPosition') smallLetterPosition: QueryList<ElementRef>;
  @ViewChildren('letterPosition') letterPosition: QueryList<ElementRef>;
  @ViewChildren('linePosition') linePosition: QueryList<ElementRef>;

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
    this.objForListWithDivideElements = {};
    this.alphabetForCollumn = [];
    const listWithFindWords = this.checkElementsService.findWords(this.wordsToFind, this.nameList);
    this.checkElementsService.sortElement(listWithFindWords);
    this.listWithAlphabeticGroupName = this.checkElementsService.groupAlphabetically(this.alphabet, listWithFindWords);
    Object.keys(this.listWithAlphabeticGroupName).forEach(el => {
      this.alphabetForCollumn.push(el);
    });
    this.divideInCollumn();
  }

  test() {
     this.letterPosition.forEach((div: ElementRef) => {
       this.letter = div.nativeElement.getBoundingClientRect().top;
       this.objForChangeColorLetter[div.nativeElement.innerText] = {letter: this.letter};
     });
     this.linePosition.forEach((div: ElementRef, index) => {
       this.line = div.nativeElement.getBoundingClientRect().top;
       this.objForChangeColorLine[index] = {line: this.line};
     });
     console.log(this.objForChangeColorLetter);
    // console.log(this.objForChangeColorLine);

     Object.keys(this.objForChangeColorLetter).forEach((el, index) => {
      // console.log(el, this.objForChangeColorLetter[el].letter);
      // console.log(this.objForChangeColorLine[index].line);
       if (this.objForChangeColorLetter[el].letter < 145 && this.objForChangeColorLine[index].line > 155) {
          console.log(el);
       }
     });
   // console.log(this.objForChangeColorLine);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
