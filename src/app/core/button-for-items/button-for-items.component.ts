import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-button-for-items',
  templateUrl: './button-for-items.component.html',
  styleUrls: ['./button-for-items.component.scss']
})
export class ButtonForItemsComponent implements OnInit {

  constructor() { }

  @Input() indexOfItem: number;
  @Input() nameOfItem: number;

  ngOnInit() {
  }

  addItem() {
 // *ngIf="i === 0 && item === 'asd' else elseBlock" checked="true"
    console.log(this.indexOfItem);
    console.log(this.nameOfItem);
  }

  removeItem() {

  }
}
