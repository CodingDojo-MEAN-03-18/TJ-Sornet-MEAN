import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToFah'
})
export class ConvertToFahPipe implements PipeTransform {

  transform<T extends object>(value: any, args?: any): any {
    value = Math.floor((value * (9 / 5))  - 459.67);
    return value;
  }

}
