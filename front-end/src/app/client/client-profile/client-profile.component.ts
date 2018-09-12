import { Component, OnInit } from '@angular/core';

import { User } from '../../admin/shared/models/user';
import { AppService } from '../../shared/app.service';
import { AdminService } from '../../admin/shared/admin.service';
import { Client } from '../../admin/shared/models/client';
import { LoadingService } from '../../loading/loading.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html'
})
export class ClientProfileComponent implements OnInit {
  user:User;
  client:Client = new Client();
  constructor(private service:AppService,private adminService:AdminService,private loading:LoadingService) { }

  ngOnInit() {
    this.user = this.service.getUser();
    this.adminService.getClient(this.user.clientId).subscribe(data=>{
      this.loading.showLoading(false);
      this.adminService.getIp(this.user.clientId).subscribe(ip => {data.ip = ip; this.loading.showLoading(false)});
      this.adminService.getVlan(this.user.clientId).subscribe(vlan => {data.vlan = vlan; this.loading.showLoading(false)});
      this.client=data;
      console.log(data);
    });
  }

}
