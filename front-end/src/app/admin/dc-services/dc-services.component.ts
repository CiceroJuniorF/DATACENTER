import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/admin/shared/admin.service';
import { Service } from 'app/admin/shared/models/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dc-services',
  templateUrl: './dc-services.component.html'
})
export class DcServicesComponent implements OnInit {
  listService:Service[] = [];
  name:string = '';
  status:number = 3;
  constructor(private service:AdminService,private router:Router) { }

  ngOnInit() {
    this.onSearchServices();
    this.status =3;
  }

  onSearchServices(){
    this.service.getServices(this.name,this.status).subscribe(data => this.listService = data, error => this.erro());
  }

  isEmpty(){
    if(this.listService.length > 0){
      return false;
    }else{
      return true
    }
  }

  erro(){
    this.router.navigate(['/internal-error']);
  }

  onStatus(value){
    status = value;
  }


}
