import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../shared/admin.service';
import { DataCenter } from '../../shared/models/data-center';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoadingService } from '../../../loading/loading.service';


@Component({
  selector: 'app-dc-datacenter',
  templateUrl: './dc-datacenter.component.html'
})
export class DcDatacenterComponent implements OnInit {
  dataCenters: DataCenter[] = [];
  checkedDataCenter: DataCenter[] = [];
  @Output() alterList = new EventEmitter();
  inscricao: Subscription;
  constructor(private service: AdminService,private loading:LoadingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {

        this.onDataCenters(params['idService']);

      });


  }

  ngAfterContentChecked() {
    this.alterList.emit(this.checkedDataCenter);
  }
  onDataCenters(id) {

    if (id != undefined) {
      this.service.getDatacentersSelected(id).subscribe(data => {
        this.dataCenters = data;
        this.dataCenters.forEach(element => {
          if(element.selected == 1){
            this.updatesDataCenter(element);
          }
        });
        this.loading.showLoading(false);
      }, error => {this.loading.showLoading(false);this.router.navigate(['/internal-error'])})
    } else {
      this.service.getDataCenters(-1).subscribe(data => {this.dataCenters = data; this.loading.showLoading(false); }, error => {this.loading.showLoading(false);this.router.navigate(['/internal-error'])});
    }
    

  }

  updatesDataCenter(dataCenter) {
    if (this.checkedDataCenter.find(item => item.id == dataCenter.id)) {
      this.checkedDataCenter.splice(this.checkedDataCenter.indexOf(dataCenter), 1);
    } else {
      this.checkedDataCenter.push(dataCenter);
    }
    this.alterList.emit(this.checkedDataCenter);
  }
}
