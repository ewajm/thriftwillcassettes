import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'shopping-cart',
  template: `
    <div *ngFor="let childSelectedCd of childSelectedCdList">
      <h2>{{ childSelectedCd.name }}</h2>
      <h2>{{ childSelectedCd.price }}</h2>
    </div>
    <div></div>
  `
})

export class ShoppingCart {
  @Input() childSelectedCdList: Cd[];
}
