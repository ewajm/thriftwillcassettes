import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "stars",
  pure: false
})
export class StarPipe {
  transform(input: number) {
      var output: string = "";
      for(var i = 0; i < input; i++) {
        output += "&#9733;";
      }
      return output;
  }
}
