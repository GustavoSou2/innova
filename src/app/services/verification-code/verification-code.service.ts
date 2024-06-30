import { Injectable } from '@angular/core';
import { getEndpointPath } from '../../core/helper/endpoints/endpoints.helper';
import { ApiService } from '../../core/helper/api/api.service';
import { map } from 'rxjs';
import { ResponseOne } from '../../core/middleware/response/response.middleware';

@Injectable()
export class VerificationCodeService {
  private apiSource: string = getEndpointPath('auth', 'verify-code');

  constructor(private apiService: ApiService<any>) {}

  verify(email: string, code: string) {
    return this.apiService.post(this.apiSource, { email, code });
  }
}
