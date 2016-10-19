import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'shopping-cart',
  template: `
  <div class="well" *ngIf="childSelectedCdList && childSelectedCdList.length > 0">
    <div class="row" *ngFor="let childSelectedCd of childSelectedCdList">
      <div class="col-sm-8">
      <h3>{{ childSelectedCd.name }}</h3>
      </div>
      <div class="col-sm-4">
        <h3> {{ childSelectedCd.price | currency: 'USD':true:'1.2-2' }} </h3>
      </div>
    </div>
    <h2 class="total">Total Price: {{ childSelectedCdList | total | currency: 'USD':true:'1.2-2' }}</h2>
    <button (click)="buyClicked()">Buy Music</button>
  </div>
  `
})

export class ShoppingCart {
  @Input() childSelectedCdList: Cd[];
  @Output() buyClickedSender = new EventEmitter();
  buyClicked() {
    this.buyClickedSender.emit();
  }
}
