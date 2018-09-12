import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable()
export class SettingsService {

  constructor(private service:AppService) { }

  getLocale(){
    return 'pt-BR';
  }

}
