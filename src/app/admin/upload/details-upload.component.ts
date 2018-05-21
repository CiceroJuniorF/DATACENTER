import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'details-upload',
  template: `
  <img src="{{fileUpload}}" alt="{{fileUpload}}" style="max-width:350px"/>`
})
export class DetailsUploadComponent implements OnInit {

  @Input() fileUpload: string;

  constructor() {}

  ngOnInit() {
  }

}