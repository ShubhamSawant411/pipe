import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncTwenty'
})
export class TruncTwentyPipe implements PipeTransform {

  val:string='';
  transform(value: string) {
    if(value.length>20){
      this.val = value.slice(0,20);
      this.val+= "..."
    }else{
      return value;
    }
    return this.val;
  }

}
