import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { User } from 'app/shared/model/user';
import { Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { Area } from 'app/client/shared/model/area';
import { DataCenter } from 'app/shared/model/datacenter';

@Component({
  selector: 'admin-dc-header',
  templateUrl: './dc-header.component.html'
})
export class AdminDcHeaderComponent implements OnInit {
  private user:User = new User();
  private areas:Area[] = [];
  private datacenters: DataCenter[] = [];
  constructor(private service:AppService, private router:Router, private serviceClient: DcClientService) { }

  ngOnInit() {
    this.user = this.service.getUser();    
  }

  logout(){
    this.service.removeUser();
    this.router.navigate(['/']);
  }

  erro(){
    this.router.navigate(['/internal-error']);
  }


}
