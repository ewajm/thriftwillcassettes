import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "average",
  pure: false
})
export class AveragePipe {
  transform(input: number[]) {
    if(input){
      var output: number = 0;
      for(var i = 0; i < input.length; i++) {
        output += input[i];
        console.log(output);
      }
      console.log(output + " / " + input.length);
      return Math.round(output/input.length * 100)/100;
    }
  }
}
