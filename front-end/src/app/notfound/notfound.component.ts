import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AppService } from 'app/shared/app.service';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor(private service:AppService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  return(){
    if(this.service.getUser().administrator === 1){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['cliente']);
    }
  }
}
