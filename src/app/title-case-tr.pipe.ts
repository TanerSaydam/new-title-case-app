import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCaseTrPipe'
})
export class TitleCaseTrPipe implements PipeTransform {

  transform(value: string): string {
    let returnValue: string = "";
    for (let i = 0; i < value.length; i++) {
      if (i == 0) {
        if(value[0] == "i"){
          returnValue = returnValue + "İ";
        }else{
          returnValue = returnValue + value[0].toLocaleUpperCase();
        }
      }else{
        if (value[i-1] != " ") {
          if (value[i] == "I") {
            returnValue = returnValue + "ı";
          }else{
            returnValue = returnValue + value[i].toLocaleLowerCase();
          }
        }else{
          if(value[i] == "i"){
            returnValue = returnValue + "İ";
          }else{
            returnValue = returnValue + value[i].toLocaleUpperCase();
          }
        }
      }
    }
    return returnValue;
  }

}
