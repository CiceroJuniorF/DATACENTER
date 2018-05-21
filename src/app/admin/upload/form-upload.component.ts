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
  progress: { percentage: number } = { percentage: 0 };


  constructor(private uploadService: UploadFileService,private alert:AlertService) { }

  ngOnInit() {
    this.uploadService.nameImage.subscribe(_name => this.upload(_name));
  }

  selectFile(event) {
    const file = event.target.files.item(0)

    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
        this.alert.warn('Invalida format!');
    }
  }

  upload(name) {
    if(this.selectedFiles != undefined){
      this.progress.percentage = 0;
      this.currentFileUpload = this.selectedFiles.item(0);
      this.uploadService.pushFileToStorage(this.currentFileUpload, name);    
    }
  }
}