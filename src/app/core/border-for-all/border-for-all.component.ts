import {Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';

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

  ngOnInit() {
  }

  // addItem(indexButton) {
  //   this.getCheckBox.forEach((el, index) => {
  //     if (index === indexButton) {
  //       el.nativeElement.textContent = 'check_box';
  //     }
  //   });
  // }
  //
  // removeItem(indexButton) {
  //   this.getCheckBox.forEach((el, index) => {
  //     if (index === indexButton) {
  //       el.nativeElement.textContent = 'cancel';
  //     }
  //   });
  // }

  unCheck(e) {
    if (e.currentTarget.textContent === 'check_box_outline_blank') {
      e.currentTarget.textContent = 'check_box';
    } else {
      e.currentTarget.textContent = 'check_box_outline_blank';
    }
  }
}
