import { Component, OnInit } from '@angular/core';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  template: `
  <!-- Modal -->
  <div aria-labelledby="loadingModalTitle" [class.modal-order]="isOpenLoading" [class.show]="isOpenLoading" class="modal fade loading" id="loadingModal" role="dialog" tabindex="-1">
    <div class="modal-dialog" role="document">
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>  
  `
})
export class LoadingComponent implements OnInit {
  isOpenLoading = false;
  constructor(private service:LoadingService) { }

  ngOnInit() {
    this.service.emitShowLoading.subscribe(_isShow => this.isOpenLoading = _isShow);
  }

}
