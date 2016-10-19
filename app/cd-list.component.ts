import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-list',
  template: `
    <select (change)="onChangeGenre($event.target.value.toLowerCase())">
    <option value="all">All</option>
    <option *ngFor="let genre of genres"> {{ genre }} </option>
    </select>
    <select (change)="onChangeArtist($event.target.value.toLowerCase())">
    <option value="all">All</option>
    <option *ngFor="let artist of artists"> {{ artist }} </option>
    </select>
    <div *ngFor="let currentCd of childCdList | genres:selectedGenre | artists:selectedArtist">
      <cd-display [cd]="currentCd"></cd-display>
      <input type="checkbox" (click)="addToCart(currentCd)"/> Add To Cart
    </div>
  `
})

export class CdListComponent {
  @Input() childCdList: Cd[];
  @Input() genres: String[];
  @Input() artists: String[];
  @Output() clickSender = new EventEmitter();
  public selectedGenre: string = "all";
  onChangeGenre(optionFromMenu){
    this.selectedGenre = optionFromMenu;
  }
  public selectedArtist: string = "all";
  onChangeArtist(optionFromMenu){
    this.selectedArtist = optionFromMenu;
  }
  public cdsInCart: Cd[] = [];
  addToCart(selectedCd){
    if(this.cdsInCart.indexOf(selectedCd) < 0){
      this.cdsInCart.push(selectedCd)
    } else {
      this.cdsInCart.splice(this.cdsInCart.indexOf(selectedCd), 1)
    }
    console.log(this.cdsInCart);
    this.clickSender.emit(this.cdsInCart);
  }
}
