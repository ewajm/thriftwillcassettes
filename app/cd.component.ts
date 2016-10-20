import { Component, Input } from '@angular/core';
import { Cd } from './cd.model';
import { TrackService } from './tracks.service';

@Component({
  selector: 'cd-display',
  providers: [TrackService],
  template: `
    <div class="row">
      <div class="col-sm-9">
      <h2>{{ cd.name }}</h2>
      </div>
      <div class="col-sm-3">
      <h2>{{ cd.price | currency: 'USD':true:'1.2-2' }}</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-4">
      <h3>{{ cd.artist }}</h3>
      </div>
      <div class="col-sm-4">
      <h3>{{ cd.genre }}</h3>
      </div>
      <div class="col-sm-4">
      <h3>
        <button class="btn btn-info" *ngIf="!tracks" (click)="getTracks(cd.artist, cd.name)">Get Tracks</button>
        <button class="btn btn-info" *ngIf="tracks"  (click)="clearTracks()">Hide Tracks</button>
      </h3>
      </div>
    </div>
    <div *ngIf="tracks" class="row tracks">
      <div class="col-sm-6">
        <h4 *ngIf="tracks.length === 1">No Tracks Found :(</h4>
        <h4 *ngFor="let track of tracks.slice(1)">{{track}}</h4>
      </div>
      <div class="col-sm-6 track-img">
        <img src="{{tracks[0]}}" class="img-responsive">
      </div>
    </div>
  `
})

export class CdComponent {
  errorMessage: string;
  @Input() cd: Cd;
  tracks: string[];
  mode = 'Observable';

  constructor(private trackService: TrackService) {}

  getTracks(artist, album){
    this.trackService.getTracks(artist, album).subscribe( tracks => this.tracks = tracks, error => this.errorMessage = <any>error);
  }

  clearTracks(){
    this.tracks = null;
  }
}
