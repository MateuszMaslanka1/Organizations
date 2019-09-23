import {Component, ElementRef, EventEmitter, Inject, OnInit, Output, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {CheckElementsService} from './check-elements.service';
import {DivideInCollumnService} from '../divide-in-collumn.service';
import {GetLetterPositionService} from '../get-letter-position.service';

@Component({
  selector: 'app-organizations-dialog',
  templateUrl: './organizations-dialog.component.html',
  styleUrls: ['./organizations-dialog.component.scss'],
})
export class OrganizationsDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OrganizationsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private getLetterPositionService: GetLetterPositionService, private checkElementsService: CheckElementsService,
              private divideInCollumnServices: DivideInCollumnService) { }

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
  objForListWithDivideElements = {};
  alphabetForCollumn = [];
  objForChangeColorLetter = {};
  objForChangeColorLine = {};
  line: string;
  letter: string;
  getLetter = 'A';
  @ViewChildren('letterPosition') letterPosition: QueryList<ElementRef>;
  @ViewChildren('linePosition') linePosition: QueryList<ElementRef>;
  @ViewChild('goToPositionLetter', {static: null}) goToPositionLetter: ElementRef;

  ngOnInit() {
    this.sortName();
    this.groupAlphabeticlly();
    this.objForListWithDivideElements = this.divideInCollumnServices.divideInCollumn(this.listWithAlphabeticGroupName);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.getLetterPositionService.getLetter(this.letterPosition);
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

  displayObjForListWithDivideElements(objForListWithDivideElements) {
    this.objForListWithDivideElements = objForListWithDivideElements;
  }

  displayalphabetForCollumn(alphabetForCollumn) {
    this.alphabetForCollumn = alphabetForCollumn;
  }

  FindLetterToChange() {
    this.letterPosition.forEach((div: ElementRef) => {
       this.letter = div.nativeElement.getBoundingClientRect().top;
       this.objForChangeColorLetter[div.nativeElement.innerText] = {letter: this.letter};
     });

    this.linePosition.forEach((div: ElementRef, index) => {
       this.line = div.nativeElement.getBoundingClientRect().top;
       this.objForChangeColorLine[index] = {line: this.line};
     });

    Object.keys(this.objForChangeColorLetter).forEach((el, index) => {
       if (Math.ceil(this.objForChangeColorLetter[el].letter) < 160 && Math.ceil(this.objForChangeColorLine[index].line) > 160) {
          this.getLetter = el;
       }
     });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  goToLetter(getLetterToGo) {
    this.getLetter = getLetterToGo;
  }
}
