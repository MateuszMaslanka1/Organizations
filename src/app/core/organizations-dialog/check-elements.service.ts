import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckElementsService {

  constructor() { }

  alphabeticallyGoupedNames = {};

  lenghtOfColumn(alphabet) {
    return Math.ceil(alphabet.length / 4);
  }

  sortElement(nameList: string[]) {
    nameList.sort();
    return nameList;
  }

  groupAlphabetically(alphabet: string[] , nameList: string[]) {
    this.alphabeticallyGoupedNames = {};
    alphabet.forEach(letter => {
     const alphabeticGroup = [];
     nameList.forEach(el2 => {
        if (letter.toLocaleLowerCase() === el2.charAt(0)) {
          alphabeticGroup.push(el2);
          this.alphabeticallyGoupedNames[letter] = {listWithName: alphabeticGroup};
        }
      });
    });
    return this.alphabeticallyGoupedNames;
  }

  findWords(wordsToFind: string, nameList: string[]) {
    const listForFindName: string[] = [];
    nameList.forEach(word => {
      if (word.search(wordsToFind) !== -1) {
        listForFindName.push(word);
      }
    });
    return listForFindName;
  }
}
