import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CheckElementsService} from '../organizations-dialog/check-elements.service';
import {DivideInCollumnService} from '../divide-in-collumn.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor(private checkElementsService: CheckElementsService, private devideInCollumnService: DivideInCollumnService) { }

  @Input() alphabet: string[];
  @Input() nameList: string[];
  @Output() divideCollumnForOrganizationsDialog = new EventEmitter();
  @Output() alphabetForCollumnForOrganizationsDialog = new EventEmitter();

  listWithAlphabeticGroupName = {};
  alphabetForCollumn = [];
  line: string;
  letter: string;
  wordsToFind: string;

  ngOnInit() {
  }

  findWords() {
    this.alphabetForCollumn = [];
    const listWithFindWords = this.checkElementsService.findWords(this.wordsToFind, this.nameList);
    this.checkElementsService.sortElement(listWithFindWords);
    this.listWithAlphabeticGroupName = this.checkElementsService.groupAlphabetically(this.alphabet, listWithFindWords);
    Object.keys(this.listWithAlphabeticGroupName).forEach(el => {
      this.alphabetForCollumn.push(el);
    });
    this.listWithAlphabeticGroupName = this.devideInCollumnService.divideInCollumn(this.listWithAlphabeticGroupName);
    this.divideCollumnForOrganizationsDialog.emit(this.listWithAlphabeticGroupName);
    this.alphabetForCollumnForOrganizationsDialog.emit(this.alphabetForCollumn);
  }
}
