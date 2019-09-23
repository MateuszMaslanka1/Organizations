import {Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';

@Component({
  selector: 'app-alphabet-bar',
  templateUrl: './alphabet-bar.component.html',
  styleUrls: ['./alphabet-bar.component.scss']
})
export class AlphabetBarComponent implements OnInit {

  constructor() { }

  @Input() alphabet: string[];
  @Input() objForListWithDivideElements = {};
  @Input() getLetter: string;
  @Input() letterPosition: QueryList<ElementRef>;
  @Output() sendLettertoOrganizationsDialog = new EventEmitter();

  ngOnInit() {

  }

  goToLetter(getLetterFromAlhabet: string) {
    this.letterPosition.forEach((div: ElementRef) => {
      if (getLetterFromAlhabet === div.nativeElement.innerText) {
        this.sendLettertoOrganizationsDialog.emit(div.nativeElement.innerText);
        div.nativeElement.scrollIntoView();
      }
    });
  }
}
