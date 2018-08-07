import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin/shared/admin.service';
import { DcClientService } from '../shared/dc-client.service';
import { DataCenter } from '../../shared/model/datacenter';

@Component({
  selector: 'app-dc-carousel',
  templateUrl: './dc-carousel.component.html',
  styleUrls: ['./dc-carousel.component.css']
})
export class DcCarouselComponent implements OnInit {

  datacenters: DataCenter[] = [];
  active = 0;
  constructor(private service: DcClientService, private serviceAdmin: AdminService) {
    setInterval(() => {
      this.prox()
    }, 7000);
  }

  ngOnInit() {
    this.serviceAdmin.getCarrousel().subscribe(
      data => {
        this.datacenters = data;
      }
    );
  }

  a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
  b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  inWords(num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    var n: any = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (this.a[Number(n[1])] || this.b[n[1][0]] + ' ' + this.a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (this.a[Number(n[2])] || this.b[n[2][0]] + ' ' + this.a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (this.a[Number(n[3])] || this.b[n[3][0]] + ' ' + this.a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (this.a[Number(n[4])] || this.b[n[4][0]] + ' ' + this.a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (this.a[Number(n[5])] || this.b[n[5][0]] + ' ' + this.a[n[5][1]]) : '';
    return str;
  }


  getClass(id) {
    return this.inWords(id) + "-slide"
  }

  prox() {
    if (this.active < this.datacenters.length - 1) {
      this.active++;
    } else {
      this.active = 0;
    }

  }

  return() {
    if (this.active > 0) {
      this.active--;
    } else {
      this.active = this.datacenters.length - 1;
    }
  }

  getDescription(desc: string) {
    if (desc.length > 500) {
      return desc.substr(0, 500) + "..."
    }
    return desc;

  }


}
