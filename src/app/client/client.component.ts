import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/shared/app.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private service:AppService) { }

  ngOnInit() {
  }


}
