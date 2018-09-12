import { Component, OnInit, Compiler } from '@angular/core';
import { AdminService } from '../shared/admin.service';
import { AlertService } from '../../alert/_services';
import { LoadingService } from '../../loading/loading.service';
import { UploadFileService } from '../upload/upload-file.service';
import { Area } from '../../client/shared/model/area';

@Component({
  selector: 'app-dc-areas',
  templateUrl: './dc-areas.component.html'
})
export class DcAreasComponent implements OnInit {
  name: string = '';
  status: number = 3;
  areas: Area[] = [];
  area: Area;
  urlImage:string;
  constructor(private service: AdminService, private alertService: AlertService, private loading: LoadingService,private upload:UploadFileService,private _compiler: Compiler) { _compiler.clearCache() }

  ngOnInit() {    
    this.area = new Area;
    this.area.id = null;    
    this.onSearch();
  }

  onSearch() {
    this.service.getAreas().subscribe(data => { this.areas = data; this.loading.showLoading(false) }, error => { this.loading.showLoading(false); this.alertService.error("Ocorreu um erro") })
  }

  edit(area) {
    this.area = area;
    this.urlImage = this.service.getUrlImage("AR"+area.id);
  }

  save() {
    this.service.saveArea(this.area).subscribe(data => {
      this.upload.uploadEvent("AR"+data);
      this.loading.showLoading(false);
      this.alertService.success("Area " + data + " salvo com sucesso!");      
    }, erro => {
      this.loading.showLoading(false);
      this.alertService.error("Ocorreu um erro");
      this.reset();
    });

  }
  reset(){
    this.area = new Area();
    this.area.id = null;
  }

  isEmpty() {
    if (this.areas.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  delete(id){
    this.service.deleteArea(id).subscribe(data => {
      this.loading.showLoading(false);
      if(data.message === 'Área apagada com sucesso!'){
        this.service.deleteImage("AR"+id).subscribe();
        this.alertService.success (data.message);    
      }else{
        this.alertService.info (data.message);  
      }    

    }, erro => {
      this.loading.showLoading(false);
      this.alertService.error("Ocorreu um erro");
      this.reset();
    });
  }


}
