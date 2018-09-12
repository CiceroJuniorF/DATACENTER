import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldType'
})
export class FieldTypePipe implements PipeTransform {

  transform(value: any): any {
    
      if ( value ==0 || value === '0')  return 'Text';
      if ( value ==1 || value === '1')  return 'Radio';
      if ( value ==2 || value === '2')  return 'Check-Box';
      if ( value ==3 || value === '3')  return 'Combo-Box';
      if ( value ==4 || value === '4')  return 'Additional';
    
  }

}
