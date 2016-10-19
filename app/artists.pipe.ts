import { Pipe, PipeTransform } from '@angular/core';
import {Cd} from './cd.model';

@Pipe({
  name: "artists",
  pure: false
})
export class ArtistPipe implements PipeTransform {
  transform(input: Cd[], desiredArtist) {
    var output: Cd[] = [];
    if(desiredArtist !== "all"){
      for(var i = 0; i < input.length; i++){
        if(input[i].artist.toLowerCase() === desiredArtist){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
