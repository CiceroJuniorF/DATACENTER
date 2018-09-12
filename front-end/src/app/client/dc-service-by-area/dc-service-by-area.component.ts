import { Component, OnInit, Compiler } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DcClientService } from 'app/client/shared/dc-client.service';
import { AppService } from 'app/shared/app.service';
import { Area } from 'app/client/shared/model/area';
import { Subscription } from 'rxjs/Rx';
import { Service } from 'app/client/shared/model/service';
import { LoadingService } from '../../loading/loading.service';


@Component({
  selector: 'app-dc-service-by-area',
  templateUrl: './dc-service-by-area.component.html',
  styleUrls: ['./dc-service-by-area.component.css']
})
export class DcServiceByAreaComponent implements OnInit {

  areas: Area[] = [];
  services: Service[] = [];
  area: Area = new Area();
  inscricao: Subscription;
  id: number;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private service: DcClientService,
    private serviceApp: AppService, private loading:LoadingService,private _compiler: Compiler) { _compiler.clearCache()}

  ngOnInit() {
    
    //Pegar parametro de rota
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        
        this.startService(params['idArea']);
      });

    //Consumir as areas
   
  }
  
  startService(id){
    this.id = id;
    this.service.getArea()
    .subscribe(data => this.loadArea(data), error => this.erro());

  this.service.getServicesByArea(this.id,this.serviceApp.getUser().clientId)
    .subscribe(data => {this.services = data, this.loading.showLoading(false)}, error => this.erro());
  }
 
  loadArea(data) {
    this.areas = data;
    this.area = this.areas.filter(area => area.id == this.id)[0];
    this.loading.showLoading(false);
  }

  getMethod(name) {
    return this.service.getUrlImage(name);
  }

  erro() {
    this.router.navigate(['/internal-error']);
    this.loading.showLoading(false);
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
