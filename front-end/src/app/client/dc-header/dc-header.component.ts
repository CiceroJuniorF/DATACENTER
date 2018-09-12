import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { User } from 'app/shared/model/user';
import { Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { Area } from 'app/client/shared/model/area';
import { DataCenter } from 'app/shared/model/datacenter';
import { LoadingService } from '../../loading/loading.service';

@Component({
  selector: 'app-dc-header',
  templateUrl: './dc-header.component.html',
  styleUrls: ['./dc-header.component.css']
})
export class DcHeaderComponent implements OnInit {
  private user:User = new User();
  private areas:Area[] = [];
  private datacenters: DataCenter[] = [];
  constructor(private service:AppService, private router:Router, private loading:LoadingService,private serviceClient: DcClientService) { }

  ngOnInit() {
    this.user = this.service.getUser();
    this.serviceClient.getArea()
    .subscribe(data => {this.areas = data; this.loading.showLoading(false)}, error => this.erro());
    this.serviceClient.getAllDatacenters()
    .subscribe(data => {this.datacenters = data; this.loading.showLoading(false)}, error => this.erro());
    
  }

  logout(){
    this.service.removeUser();
    this.router.navigate(['/']);
  }

  erro(){
    this.loading.showLoading(false);
    this.router.navigate(['/internal-error']);
  }


}
