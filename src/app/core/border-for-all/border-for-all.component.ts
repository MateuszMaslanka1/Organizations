import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-border-for-all',
  templateUrl: './border-for-all.component.html',
  styleUrls: ['./border-for-all.component.scss']
})
export class BorderForAllComponent implements OnInit {

  constructor() { }

  @Input() objForListWithDivideElements = {};
  @ViewChildren('linePosition') linePosition: QueryList<ElementRef>;
  @Input() item: any;
  @ViewChildren('getCheckBox') getCheckBox: QueryList<any>;
  isChecked = false;
  indexOfElement: number;

  ngOnInit() {
  }

  addItem(indexButton) {
    this.getCheckBox.forEach((el, index) => {
      if (index === indexButton) {
        el.checked = true;
      }
    });
  }
}
