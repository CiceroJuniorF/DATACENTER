import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../loading/loading.service';
import { AlertService } from '../../alert/_services';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-dc-control-service-iten-type',
  templateUrl: './dc-control-service-iten-type.component.html'
})
export class DcControlServiceItenTypeComponent implements OnInit {

  serviceItenTypes: any[] =[];
  constructor(private service: AdminService,private alert:AlertService,private loading:LoadingService) { }

  ngOnInit() {
    this.getType();
  }

  getType(){
    this.service.getServiceItenType().subscribe(data => { 
      this.serviceItenTypes = data; 
      this.loading.showLoading(false); 
      console.log(data);
    }, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro ao carregar os dados");
    });
  }

  delete(typeId){
    this.service.deleteServiceItenType(typeId).subscribe(data => {
      this.loading.showLoading(false); 
      this.alert.success("Deletado com sucesso");
      this.getType();
    }, error => {
      this.loading.showLoading(false); this.alert.error("Ocorreu um erro ao deletar o dado");
    });
  }

  isEmpty() {
    if (this.serviceItenTypes.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  alterType(event){
    this.getType();
  }

}
