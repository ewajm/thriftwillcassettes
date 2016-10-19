import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'shopping-cart',
  template: `
    <div *ngFor="let childSelectedCd of childSelectedCdList">
      <h2>{{ childSelectedCd.name }}</h2>
      <h2>{{ childSelectedCd.price | currency: 'USD':true:'1.2-2' }}</h2>
    </div>
    <h2 *ngIf="childSelectedCdList && childSelectedCdList.length > 0">Total Price: {{ childSelectedCdList | total | currency: 'USD':true:'1.2-2' }}</h2>
    <div></div>
  `
})

export class ShoppingCart {
  @Input() childSelectedCdList: Cd[];

}
