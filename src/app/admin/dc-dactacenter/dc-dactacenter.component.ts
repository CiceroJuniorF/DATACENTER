import { Component, OnInit, Compiler } from '@angular/core';
import { AlertService } from '../../alert/_services';
import { LoadingService } from '../../loading/loading.service';
import { DataCenter } from '../../shared/model/datacenter';
import { AdminService } from '../shared/admin.service';
import { UploadFileService } from '../upload/upload-file.service';

@Component({
  selector: 'app-dc-dactacenter',
  templateUrl: './dc-dactacenter.component.html'
})
export class DcDactacenterComponent implements OnInit {

  name: string = '';
  status: number = 3;
  datacenters: DataCenter[] = [];
  datacenter: DataCenter;
  urlImage:string;
  constructor(private service: AdminService, private alertService: AlertService, private loading: LoadingService,private upload:UploadFileService,private _compiler: Compiler) { _compiler.clearCache() }

  ngOnInit() {    
    this.datacenter = new DataCenter;
    this.datacenter.id = null;    
    this.onSearch();
  }

  onSearch() {
    this.service.getDataCenter(this.name).subscribe(data => { this.datacenters = data; this.loading.showLoading(false) }, error => { this.loading.showLoading(false); this.alertService.error("Ocorreu um erro") })
  }

  edit(datacenter) {
    this.datacenter = datacenter;
    this.urlImage = this.service.getUrlImageDC("DS"+datacenter.id);
  }

  save() {
    this.service.saveDataCenter(this.datacenter).subscribe(data => {
      this.upload.uploadEvent("DS"+data);
      this.loading.showLoading(false);
      this.alertService.success("DataCenter " + data + " salvo com sucesso!");      
      location.reload();
    }, erro => {
      this.loading.showLoading(false);
      this.alertService.error("Ocorreu um erro");
      this.reset();
    });

  }
  reset(){
    this.datacenter = new DataCenter;
    this.datacenter.id = null;
  }

  isEmpty() {
    if (this.datacenters.length < 1) {
      return false;
    } else {
      return true;
    }
  }


}
