@Injectable({
  providedIn: 'root'
})
export class CheckElementsService {

  constructor() { }

  obj = {};

  lenghtOfColumn(alphabet) {
    return Math.ceil(alphabet.length / 4);
  }

  sortElement(nameList: string[]) {
    nameList.sort();
    return nameList;
  }

  divideOnAlphabeticGroup(alphabet: string[] , nameList: string[]) {
    let listWithAlphabeticGroup = [];
    alphabet.forEach(element => {
      listWithAlphabeticGroup = [];
      nameList.forEach(el2 => {
        if (element.toLocaleLowerCase() === el2.charAt(0)) {
          listWithAlphabeticGroup.push(el2);
          this.obj[element] = {listWithName: listWithAlphabeticGroup};
        }
      });
    });
    return this.obj;
  }
}

import { Injectable } from '@angular/core';
