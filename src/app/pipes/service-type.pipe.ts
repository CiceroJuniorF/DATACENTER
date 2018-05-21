import { Pipe, PipeTransform } from '@angular/core';
import { AdminService } from '../admin/shared/admin.service';
import { ServiceItenType } from '../admin/shared/models/service-iten-type';
import { AlertService } from '../alert/_services';

@Pipe({
  name: 'serviceType'
})
export class ServiceTypePipe implements PipeTransform {
  constructor(private service:AdminService,private alert:AlertService){
   
  }
  types:ServiceItenType[] = [];
  transform(value: any, list:ServiceItenType[]): any {    
    let valor;
    list.forEach(element => {
      if(element.id == value){
        valor = element.name;
      }
    });
    return valor;
  }

}
