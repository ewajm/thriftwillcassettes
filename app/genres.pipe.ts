import { Pipe, PipeTransform } from '@angular/core';
import {Cd} from './cd.model';

@Pipe({
  name: "genres",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Cd[], desiredGenre) {
    var output: Cd[] = [];
    if(desiredGenre !== "all"){
      for(var i = 0; i < input.length; i++){
        if(input[i].genre.toLowerCase() === desiredGenre){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
