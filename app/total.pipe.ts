import { Pipe, PipeTransform } from '@angular/core';
import {Cd} from './cd.model';

@Pipe({
  name: "total",
  pure: false
})
export class TotalPipe {
  transform(input: Cd[]) {
    if(input){
      var output: number = 0;
      for(var i = 0; i < input.length; i++) {
        output = input[i].price + output;
      }
      return output;
    }
  }
}
