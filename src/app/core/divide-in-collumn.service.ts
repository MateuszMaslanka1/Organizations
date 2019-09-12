import { Injectable } from '@angular/core';
import {CheckElementsService} from './organizations-dialog/check-elements.service';

@Injectable({
  providedIn: 'root'
})
export class DivideInCollumnService {

  constructor(private checkElementsService: CheckElementsService) { }

  listForFirstCollumn = [];
  listForSecondCollumn = [];
  listForThirdCollumn = [];
  listForFourthCollumn = [];
  objForListWithDivideElements = {};
  line: string;
  letter: string;

  divideInCollumn(listWithAlphabeticGroupName) {
    this.objForListWithDivideElements = {};
    Object.keys(listWithAlphabeticGroupName).forEach(el => {
      const quantityOfElementInColumn = this.checkElementsService.lenghtOfColumn(listWithAlphabeticGroupName[el].listWithName);
      listWithAlphabeticGroupName[el].listWithName.forEach(el2 => {
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
    return this.objForListWithDivideElements;
  }
}

