import {Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-button-for-items',
  templateUrl: './button-for-items.component.html',
  styleUrls: ['./button-for-items.component.scss']
})
export class ButtonForItemsComponent implements OnInit {

  constructor() { }

  @Input() indexOfItem: number;
  @Input() getCheckBox: any;
  // @ViewChildren('getCheckBox') getCheckBox: QueryList<any>;

  ngOnInit() {
  }

  addItem() {
    this.getCheckBox.textContent = 'check_box';
  }

  removeItem() {
    this.getCheckBox.textContent = 'cancel';
  }
}

