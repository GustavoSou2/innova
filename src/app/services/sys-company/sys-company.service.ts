import { Injectable } from '@angular/core';
import { getEndpointPath } from '../../core/helper/endpoints/endpoints.helper';
import { ApiService } from '../../core/helper/api/api.service';
import { map } from 'rxjs';

@Injectable()
export class SysCompanyService {
  private apiSource: string = getEndpointPath('sysCompany', 'list');

  constructor(private apiService: ApiService<any>) {}

  list() {
    return this.apiService.get({ path: this.apiSource })?.pipe(map(({ response }: any) => response));
  }
}
