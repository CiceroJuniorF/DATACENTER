import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/shared/app.service';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { Area } from 'app/client/shared/model/area';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dc-services',
  templateUrl: './dc-services.component.html',
  styleUrls: ['./dc-services.component.css']
})
export class DcServicesComponent implements OnInit {
  areas:Area[] = [];
  constructor(private service: DcClientService, private serviceApp: AppService,private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getArea()
      .subscribe(data => this.areas = data, error => this.erro())
  }

  getMethod(id) {
    return this.service.getUrlImage('AR'+id);
  }

  erro(){
    this.router.navigate(['/internal-error']);
  }
  

}
