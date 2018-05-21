import { Component, OnInit } from '@angular/core';
import { Product } from 'app/client/shared/model/products';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { AppService } from 'app/shared/app.service';
import { User } from 'app/shared/model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../loading/loading.service';
import { AlertService } from '../../alert/_services';

@Component({
  selector: 'app-dc-corp-client',
  templateUrl: './dc-corp-client.component.html',
  styleUrls: ['./dc-corp-client.component.css']
})
export class DcCorpClientComponent implements OnInit {
  products: Product[] = [];
  visible: boolean = true;
  constructor(private service: DcClientService, private loading:LoadingService, private serviceApp: AppService, private router: Router,
    private route: ActivatedRoute, private alert:AlertService) { }

  ngOnInit() {
    var user: User = this.serviceApp.getUser();
    var id = user.clientId;
    this.service.getProducts(id)
      .subscribe(data => {this.products = data;this.loading.showLoading(false);}, error => this.erro())
  }
  erro() {
    this.alert.error('Ocorreu um erro por favor contate uma administrador');
    this.router.navigate(['/internal-error']);
    this.visible = false;
    this.loading.showLoading(false);
  }

}
