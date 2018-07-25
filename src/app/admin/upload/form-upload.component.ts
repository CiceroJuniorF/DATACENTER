import { Component, OnInit } from '@angular/core';
import { UploadFileService } from './upload-file.service';
import { AlertService } from '../../alert/_services';


@Component({
  selector: 'form-upload',
  templateUrl: './form-upload.component.html'
})
export class FormUploadComponent implements OnInit {

  selectedFiles: FileList
  currentFileUpload: File
  message:string;
  error:boolean;


  constructor(private uploadService: UploadFileService,private alert:AlertService) { }

  ngOnInit() {
    this.uploadService.nameImage.subscribe(_name => this.upload(_name));
  }

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match('image.*')) {
      if(event.target.files.item(0).size >= 1048576){ 
      
       this.message = "Tamanho excedido!";
       this.error = true;      
      }else{        
        this.selectedFiles = event.target.files;

        this.message = "Completo!";
        this.error = false;
      }      
    } else {
        this.message = "Não é uma imagem.";
        this.error = true;
    }    
     
  }

  upload(name) {
    if(this.selectedFiles != undefined && !this.error){           
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadService.pushFileToStorage(this.currentFileUpload, name);    
    }
  }
}