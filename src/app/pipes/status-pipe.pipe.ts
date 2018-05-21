import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusPipe'
})
export class StatusPipePipe implements PipeTransform {

  transform(statusId: any): any {
    if (statusId == 0)
      return 'Excluido'
    if (statusId == 1)
      return 'Desativado'
    if (statusId == 2)
      return 'Ativado'
    if (statusId == 3)
      return 'Todos';    
      return null;
  }

}
