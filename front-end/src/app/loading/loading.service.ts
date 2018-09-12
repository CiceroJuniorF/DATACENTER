import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class LoadingService {

    emitShowLoading = new EventEmitter<boolean>();

    public showLoading(_isShow: boolean){
        this.emitShowLoading.emit(_isShow);
    }
}