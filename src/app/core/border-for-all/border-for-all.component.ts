import {Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-border-for-all',
  templateUrl: './border-for-all.component.html',
  styleUrls: ['./border-for-all.component.scss']
})
export class BorderForAllComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  @Input() objForListWithDivideElements = {};
  @ViewChildren('linePosition') linePosition: QueryList<ElementRef>;
  @Input() item: any;
  @ViewChildren('getCheckBox') getCheckBox: QueryList<any>;

  ngOnInit() {
  }

  addItem(indexButton) {
    this.getCheckBox.forEach((el, index) => {
      if (index === indexButton) {
        el.checked = true;
      }
    });
  }

  removeItem(indexButton) {
    this.getCheckBox.forEach((el, index) => {
      if (index === indexButton) {
        const getParent = el._elementRef.nativeElement.parentNode;
        el._elementRef.nativeElement.remove();
        this.renderer.setProperty(getParent, 'innerHTML', '<i class="material-icons"> cancel </i>');
      }
    });
  }

  unCheck(event) {
    console.log(event);
  }
}
