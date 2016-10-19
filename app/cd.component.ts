import { Component, Input } from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-display',
  template: `
    <div>
      <div class="row">
        <div class="col-sm-9">
        <h2>{{ cd.name }}</h2>
        </div>
        <div class="col-sm-3">
        <h2>{{ cd.price | currency: 'USD':true:'1.2-2' }}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
        <h3>{{ cd.artist }}</h3>
        </div>
        <div class="col-sm-6">
        <h3>{{ cd.genre }}</h3>
        </div>
      </div>
    </div>
  `
})

export class CdComponent {
  @Input() cd: Cd;

}
