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
import { AdminService } from '../../admin/shared/admin.service';


@Component({
  selector: 'app-dc-clientsproducts',
  templateUrl: './dc-clientsproducts.component.html',
  styleUrls: ['./dc-clientsproducts.component.css']
})
export class DcClientsproductsComponent implements OnInit {

  areas: Area[] = [];
  servicesClient: ClientService[] = [];
  listSearch: ClientService[] = [];
  area: Area = new Area();
  inscricao: Subscription;
  id: string;
  productService: ProductService = new ProductService();
  serviceClient: ClientService = new ClientService();
  isOrder = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DcClientService,
    private serviceApp: AppService, private loading: LoadingService, private alert: AlertService,
    private adminService: AdminService) { }

  ngOnInit() {
    //Pegar parametro de rota
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['idArea'];
        //Consumir as areas
        this.service.getArea()
          .subscribe(data => this.loadArea(data), error => this.erro());
      });



    //Consumir as ClientService


  }
  loadArea(data) {
    this.areas = data;
    this.area = this.areas.filter(area => area.name === this.id)[0];
    this.service.getClientService(this.area.id, this.service.getAppService().getUser().clientId)
      .subscribe(data => { this.servicesClient = data; this.listSearch = data; this.loading.showLoading(false) }, error => this.erro());
  }

  loadClientProduct(service) {
    this.serviceClient = service;
    this.service.getProductService(this.serviceClient.idClientService)
      .subscribe(productService => this.alterService(productService), error => this.erro());
  }

  alterService(productService) {
    this.productService = productService;
    this.productService.field.forEach(element => {
      element.value = element.value.split('][').join('  |  ');
    });
    this.loading.showLoading(false);
  }

  erro() {
    this.alert.error('There was an error loading data please contact an administrator!');
    this.loading.showLoading(false);
  }

  onSearch(value) {
    this.loading.showLoading(true);
    this.listSearch = [];
    if (value === '') {
      this.listSearch = this.servicesClient;
    } else {
      this.servicesClient.forEach(element => {
        if (element.serviceName.toUpperCase().match(value.toUpperCase())
        ) {
          this.listSearch.push(element);
        }
      });
    }
    this.loading.showLoading(false);
  }

  cancelService(idService) {
    this.adminService.cancelService(idService, this.service.appService.getUser().clientId).subscribe(
      data => {
        this.alert.info(data.message);
        this.loading.showLoading(false);
        this.ngOnInit();
      }
    )
  }

}
