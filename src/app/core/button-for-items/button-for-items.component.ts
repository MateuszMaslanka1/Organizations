import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-button-for-items',
  templateUrl: './button-for-items.component.html',
  styleUrls: ['./button-for-items.component.scss']
})
export class ButtonForItemsComponent implements OnInit {

  constructor() { }

  @Input() indexOfItem: number;
  @Input() nameOfItem: number;
  @ViewChildren('getCheckBox') getCheckBox: QueryList<any>;

  ngOnInit() {
  }

  addItem(indexButton) {
    this.getCheckBox.forEach((el, index) => {
      if (index === indexButton) {
        el.nativeElement.textContent = 'check_box';
      }
    });
  }

  removeItem(indexButton) {
    this.getCheckBox.forEach((el, index) => {
      if (index === indexButton) {
        el.nativeElement.textContent = 'cancel';
      }
    });
  }
}
