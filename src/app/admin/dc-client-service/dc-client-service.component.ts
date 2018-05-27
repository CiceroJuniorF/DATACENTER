import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { LoadingService } from '../../loading/loading.service';
import { AlertService } from '../../alert/_services';

@Component({
  selector: 'app-dc-client-service',
  templateUrl: './dc-client-service.component.html'
})
export class DcClientServiceComponent implements OnInit {
  nameClient: string = '';
  nameService: string = '';
  status: number = 1;

  clientServices: any[] = [];

  clientService: any = {
    areaName : "",
    clientName : "",
    document :"",
    idServiceClient : null,
    serviceName : "",
    situation : ""
  };
  constructor(private service: AdminService, private loading: LoadingService, private alert: AlertService) { }

  ngOnInit() {
    this.onSearch();
    this.reset();
  }

  load(cs){
    this.clientService = cs;
  }
  reset(){
    this.clientService = {
      areaName : "",
      clientName : "",
      document :"",
      idServiceClient : null,
      serviceName : "",
      situation : ""
    }
  }
  onSearch() {
    this.service.searchClientService(this.nameClient, this.nameService, this.status).subscribe(data => {
      this.clientServices = data;
      console.log(data);
      this.loading.showLoading(false);
    }, error => {
      this.loading.showLoading(false);
      this.alert.error("Ocorreu um erro no carregamento dos dados");
    });
  }

  accept(){
    var action = this.clientService.situation === 'Contratação pendente de aprovação' ? 'aprove': 'cancel';
    this.service.approveClientService(this.clientService.idServiceClient,action).subscribe(data =>{
      this.loading.showLoading(false);
      this.alert.info(data.message);
      this.ngOnInit();
    },error => {
      this.loading.showLoading(false);
      this.alert.error("Ocorreu um erro no carregamento dos dados");
    });
  }
  isEmpty() {
    if (this.clientServices.length < 1) {
      return false;
    } else {
      return true;
    }
  }

}
