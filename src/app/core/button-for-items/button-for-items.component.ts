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
  // @ViewChildren('getCheckBox') getCheckBox: QueryList<ElementRef>;

  ngOnInit() {
  }

  addItem() {
    this.getCheckBox.forEach((el, index) => {
      console.log(el._elementRef.nativeElement, index);
      if (index === this.indexOfItem) {
        el.checked = true;
      }
    });
  }
  removeItem() {
  }
}
