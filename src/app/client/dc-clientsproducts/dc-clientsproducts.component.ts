import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { AppService } from 'app/shared/app.service';
import { Area } from 'app/client/shared/model/area';
import { Subscription } from 'rxjs';
import { Service } from 'app/client/shared/model/service';
import { ClientService } from 'app/client/shared/model/clientService';
import { ProductService } from 'app/client/shared/model/productService';
import { Product } from 'app/client/shared/model/products';
import { LoadingService } from '../../loading/loading.service';
import { AlertService } from '../../alert/_services';


@Component({
  selector: 'app-dc-clientsproducts',
  templateUrl: './dc-clientsproducts.component.html',
  styleUrls: ['./dc-clientsproducts.component.css']
})
export class DcClientsproductsComponent implements OnInit {

  areas: Area[] = [];
  servicesClient: ClientService[] = [];
  area: Area = new Area();
  inscricao: Subscription;
  id: string;
  productService:ProductService = new ProductService();
  serviceClient:ClientService = new ClientService();

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DcClientService,
    private serviceApp: AppService, private loading:LoadingService, private alert:AlertService) { }

  ngOnInit() {
    //Pegar parametro de rota
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['idArea'];
      });

    //Consumir as areas
    this.service.getArea()
      .subscribe(data => this.loadArea(data), error => this.erro());

    //Consumir as ClientService
    

  }
  loadArea(data) {
    this.areas = data;
    this.area = this.areas.filter(area => area.name === this.id)[0];
    this.service.getClientService(this.area.id, this.service.getAppService().getUser().clientId)
      .subscribe(data => {this.servicesClient = data; this.loading.showLoading(false)}, error => this.erro());
  }

  loadClientProduct(service){
    this.serviceClient = service;
    this.service.getProductService(this.serviceClient.idClientService)
    .subscribe(productService => this.alterService(productService));
  }

  alterService(productService){
    this.productService = productService;
    this.productService.field.forEach(element => {
        element.value = element.value.split('][').join('  |  ');
             
    });
    this.loading.showLoading(false);
  }

  erro() {
    this.alert.error('Ocorreu um erro ao carregar os dados por favor contate um administrador!');
    this.loading.showLoading(false);
  }

}
