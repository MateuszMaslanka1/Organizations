import {ElementRef, Injectable, QueryList} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetLetterPositionService {

  constructor() { }

  letterPositionFormOrganizationDialog: QueryList<ElementRef>;

  getLetter(letterPosition: QueryList<ElementRef>) {
    this.letterPositionFormOrganizationDialog = letterPosition;
  }

  sendLetter() {
    return this.letterPositionFormOrganizationDialog;
  }
}
