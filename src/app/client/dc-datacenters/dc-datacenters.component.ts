import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { Subscription } from 'rxjs/Rx';
import { DataCenter } from 'app/shared/model/datacenter';
import { LoadingService } from '../../loading/loading.service';

@Component({
  selector: 'app-dc-datacenters',
  templateUrl: './dc-datacenters.component.html',
  styleUrls: ['./dc-datacenters.component.css']
})
export class DcDatacentersComponent implements OnInit {
  inscricao: Subscription;
  datacenter:DataCenter =  new DataCenter();
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DcClientService,private loading:LoadingService) { }

  ngOnInit() {
     //Pegar parametro de rota
     this.inscricao = this.route.params.subscribe(
      (params: any) => {
        
        this.setDataCenter(params['idDataCenter']);
      });

  }
  setDataCenter(idDataCenter){
    this.service.getDatacenter(idDataCenter)
    .subscribe(dataCenter => {this.datacenter =dataCenter; this.loading.showLoading(false);}, error => this.erro());
    
  }
  erro() {
    this.router.navigate(['/internal-error']);
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
