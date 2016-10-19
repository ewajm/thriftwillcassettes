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
    <div class="well" *ngFor="let currentCd of childCdList | genres:selectedGenre | artists:selectedArtist">
      <cd-display [cd]="currentCd"></cd-display>
      <div class="checkbox"><input type="checkbox" (click)="addToCart(currentCd)"/> Add To Cart</div>
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
  addToCart(selectedCd){
    this.clickSender.emit(selectedCd);
  }
}
