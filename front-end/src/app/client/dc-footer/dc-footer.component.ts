import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { Area } from 'app/client/shared/model/area';
import { DataCenter } from 'app/shared/model/datacenter';
import { LoadingService } from '../../loading/loading.service';

@Component({
  selector: 'app-dc-footer',
  templateUrl: './dc-footer.component.html',
  styleUrls: ['./dc-footer.component.css']
})
export class DcFooterComponent implements OnInit {

  private areas:Area[] = [];
  private datacenters: DataCenter[] = [];
  constructor(private router:Router, private serviceClient: DcClientService, private loading:LoadingService) { }

  ngOnInit() {
    this.serviceClient.getArea()
    .subscribe(data => {this.areas = data; this.loading.showLoading(false);}, error => this.erro());
    this.serviceClient.getAllDatacenters()
    .subscribe(data => {this.datacenters = data; this.loading.showLoading(false);}, error => this.erro());
  }
  
  erro(){
    this.router.navigate(['/internal-error']);
    this.loading.showLoading(false);
  }

}
