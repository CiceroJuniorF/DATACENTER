import { Component, OnInit } from '@angular/core';
import { Client } from '../../shared/models/client';
import { AdminService } from '../../shared/admin.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../../loading/loading.service';
import { AlertService } from '../../../alert/_services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class AdminClientListComponent implements OnInit {
  name: string = '';
  status: number = 3;
  listClient: Client[] = [];

  constructor(private service: AdminService,private alert:AlertService, private router: Router,private loading:LoadingService) { }

  ngOnInit() {
    this.onSearchClient();
    this.status = 3;
  }

  onSearchClient() {
    this.service.getClients(this.name, this.status).subscribe(data => {this.listClient = data; this.loading.showLoading(false);}, error => this.erro());
  }

  isEmpty() {
    if (this.listClient.length > 0) {
      return false;
    } else {
      return true
    }
  }

  erro() {
    this.loading.showLoading(false);
    this.alert.error('Ocorreu um erro no carregamento dos dados!')
  }

  delete(id) {
    this.service.deleteClient(id).subscribe(data => {this.loading.showLoading(false);this.alert.info(data.message);this.ngOnInit()});
  }


}
