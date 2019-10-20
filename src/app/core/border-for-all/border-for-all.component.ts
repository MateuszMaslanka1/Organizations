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
  @ViewChildren('getCheckBox') getCheckBox: QueryList<ElementRef>;
 // checked = false;

  ngOnInit() {
  }

  addItem(){
    //console.log(event.checked);
    this.getCheckBox.forEach((el) => {
      console.log(el);
    });
  }
}
