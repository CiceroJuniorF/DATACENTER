import { Component, OnInit, Compiler } from '@angular/core';
import { AlertService } from '../../alert/_services';
import { LoadingService } from '../../loading/loading.service';
import { Carrousel } from '../../shared/model/carrousel';
import { AdminService } from '../shared/admin.service';
import { UploadFileService } from '../upload/upload-file.service';

@Component({
  selector: 'app-dc-images-carrousel',
  templateUrl: './dc-images-carrousel.component.html'
})
export class DcImagesCarrouselComponent implements OnInit {


  name: string = '';
  status: number = 3;
  carrousels: Carrousel[] = [];
  carrousel: Carrousel;
  urlImage:string;
  constructor(private service: AdminService, private alertService: AlertService, private loading: LoadingService,private upload:UploadFileService,private _compiler: Compiler) { _compiler.clearCache() }

  ngOnInit() {    
    this.carrousel = new Carrousel;
    this.carrousel.id = null;    
    this.onSearch();
  }

  onSearch() {
    this.service.getCarrousel(this.name).subscribe(data => { this.carrousels = data; this.loading.showLoading(false) }, error => { this.loading.showLoading(false); this.alertService.error("Ocorreu um erro") })
  }

  edit(carrousel) {
    this.carrousel = carrousel;
    this.urlImage = this.service.getUrlImageDC("CS"+carrousel.id);
  }

  save() {
    this.service.saveCarrousel(this.carrousel).subscribe(data => {
      this.upload.uploadEvent("CS"+data);
      this.loading.showLoading(false);
      this.alertService.success("Carrousel " + data + " salvo com sucesso!");      
      location.reload();
    }, erro => {
      this.loading.showLoading(false);
      this.alertService.error("Ocorreu um erro");
      this.reset();
    });

  }
  reset(){
    this.carrousel = new Carrousel;
    this.carrousel.id = null;
  }

  isEmpty() {
    if (this.carrousels.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  delete(id){
    this.service.deleteCarrousel(id).subscribe(data => {
      this.loading.showLoading(false);
      if(data.message != 'Não é possível apagar este carrousel, pois esta atribuido a um serviço'){
        this.service.deleteImage("CS"+id).subscribe();
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
