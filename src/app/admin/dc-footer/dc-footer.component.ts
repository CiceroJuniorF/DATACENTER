import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { Router } from '@angular/router';
import { Area } from 'app/client/shared/model/area';
import { DataCenter } from 'app/shared/model/datacenter';

@Component({
  selector: 'admin-dc-footer',
  templateUrl: './dc-footer.component.html'
})
export class AdminDcFooterComponent implements OnInit {

  private areas:Area[] = [];
  private datacenters: DataCenter[] = [];
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  erro(){
    this.router.navigate(['/internal-error']);
  }

}
