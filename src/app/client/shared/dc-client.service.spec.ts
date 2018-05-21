/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DcClientService } from './dc-client.service';

describe('DcClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DcClientService]
    });
  });

  it('should ...', inject([DcClientService], (service: DcClientService) => {
    expect(service).toBeTruthy();
  }));
});
