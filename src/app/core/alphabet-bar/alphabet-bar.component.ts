import {Component, ElementRef, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {GetLetterPositionService} from '../get-letter-position.service';

@Component({
  selector: 'app-alphabet-bar',
  templateUrl: './alphabet-bar.component.html',
  styleUrls: ['./alphabet-bar.component.scss']
})
export class AlphabetBarComponent implements OnInit {

  constructor(private getLetterPositionService: GetLetterPositionService) { }

  @Input() alphabet: string[];
  @Input() objForListWithDivideElements = {};
  @Input() getLetter: string;
  @Input() letterPosition: QueryList<ElementRef>;
  @Output() sendLettertoOrganizationsDialog = new EventEmitter();

  ngOnInit() {
  }

  goToLetter(getLetterFromAlhabet: string) {
    this.getLetterPositionService.sendLetter().forEach((div: ElementRef) => {
      if (getLetterFromAlhabet === div.nativeElement.children[0].innerText) {
        this.sendLettertoOrganizationsDialog.emit(div.nativeElement.innerText);
        console.log(div.nativeElement.offsetTop);
      }
    });
  }
}
