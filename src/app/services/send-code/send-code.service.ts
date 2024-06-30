import { Injectable } from '@angular/core';
import { getEndpointPath } from '../../core/helper/endpoints/endpoints.helper';
import { ApiService } from '../../core/helper/api/api.service';
import { map } from 'rxjs';
import { ResponseOne } from '../../core/middleware/response/response.middleware';

@Injectable()
export class SendCodeService {
  private apiSource: string = getEndpointPath('auth', 'send-code');

  constructor(private apiService: ApiService<any>) {}

  send(email: string) {
    return this.apiService.post(this.apiSource, { email });
  }
}
