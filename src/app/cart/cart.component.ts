import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {enableProdMode} from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input() items = [];
@Output() itemAdded = new EventEmitter<string>();
newItem = '';
  constructor() {
  }

  ngOnInit() {
  }
  onAddItem() {
    const newAddedItem = this.newItem;
    console.log(newAddedItem);
  this.itemAdded.emit(this.newItem);
  this.newItem = '';
  }
}

