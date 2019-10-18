import {Component, Input, OnInit} from '@angular/core';

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
    console.log(this.indexOfItem);
    console.log(this.nameOfItem);
  }

  removeItem() {

  }
}
