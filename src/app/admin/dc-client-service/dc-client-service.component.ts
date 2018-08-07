import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { LoadingService } from '../../loading/loading.service';
import { AlertService } from '../../alert/_services';
import { ClientService } from '../../client/shared/model/clientService';
import { DcClientService } from '../../client/shared/dc-client.service';
import { ProductService } from '../../client/shared/model/productService';

@Component({
  selector: 'app-dc-client-service',
  templateUrl: './dc-client-service.component.html'
})
export class DcClientServiceComponent implements OnInit {
  nameClient: string = '';
  nameService: string = '';
  status: number = 1;
  productService:ProductService = new ProductService();
  

  clientServices: any[] = [];

  clientService: any = {
    areaName : "",
    clientName : "",
    document :"",
    idServiceClient : null,
    serviceName : "",
    situation : "",
    type:"",
  };
  constructor(private service: AdminService, private loading: LoadingService, private alert: AlertService,private serviceClient: DcClientService) { }

  ngOnInit() {
    this.onSearch();
    this.reset();
  }

  load(cs){
    this.clientService = cs;
    this.loadClientProduct(cs.idServiceClient);  

  }
  loadClientProduct(id){    
    this.serviceClient.getProductService(id)
    .subscribe(productService => this.alterService(productService), error => this.alert.error(''));
  }
  alterService(productService){
    this.productService = productService;
    this.productService.field.forEach(element => {
        element.value = element.value.split('][').join('  |  ');             
    });
    this.loading.showLoading(false);
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
      this.clientService.type = 3;
      console.log(data);
      this.loading.showLoading(false);
    }, error => {
      this.loading.showLoading(false);
      this.alert.error("Ocorreu um erro no carregamento dos dados");
    });
  }

  accept(){
    var action = this.clientService.type === 1 ? 'aprove': 'cancel';
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
