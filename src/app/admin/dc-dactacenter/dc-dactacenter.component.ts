import { Component, OnInit } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { AlertService } from '../../alert/_services';
import { LoadingService } from '../../loading/loading.service';
import { DataCenter } from '../../shared/model/datacenter';

@Component({
  selector: 'app-dc-dactacenter',
  templateUrl: './dc-dactacenter.component.html'
})
export class DcDactacenterComponent implements OnInit {

  name: string = '';
  status: number = 3;
  datacenters: DataCenter[] = [];
  datacenter: DataCenter;
  constructor(private service: AdminService, private alertService: AlertService, private loading: LoadingService) { }

  ngOnInit() {
    this.datacenter = new DataCenter;
    this.datacenter.id = null;
    this.onSearch();
  }

  onSearch() {
    this.service.getDataCenter(this.name).subscribe(data => { this.datacenters = data; this.loading.showLoading(false) }, error => { this.loading.showLoading(false); this.alertService.error("Ocorreu um erro") })
  }

  edit(datacenter) {
    this.datacenter = datacenter;
  }

  save() {
    this.service.save(this.datacenter).subscribe(data => {
      this.loading.showLoading(false);
      this.alertService.success("DataCenter " + data + " salvo com sucesso!");
      this.ngOnInit();
    }, erro => {
      this.loading.showLoading(false);
      this.alertService.error("Ocorreu um erro");
      this.reset();
    });
  }
  reset(){
    this.datacenter = new DataCenter;
    this.datacenter.id = null;
  }

  isEmpty() {
    if (this.datacenters.length < 1) {
      return false;
    } else {
      return true;
    }
  }

}
