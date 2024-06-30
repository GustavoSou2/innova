import { Inject, Injectable } from '@angular/core';
import { getEndpointPath } from '../../core/helper/endpoints/endpoints.helper';
import { ApiService } from '../../core/helper/api/api.service';
import { map } from 'rxjs';
import { ResponseOne } from '../../core/middleware/response/response.middleware';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class LoginService {
  private apiSource: string = getEndpointPath('login');

  constructor(
    @Inject(ApiService) private readonly apiService: ApiService<any>,
    private cookieService: CookieService,
  ) {}

  logIn(user: any) {
    return this.apiService.post(this.apiSource, user).pipe(
      map(({ response }: ResponseOne<any>) => {
        const { token, ...user } = response;

        if (user.complete && user.isVerified) {
          localStorage.setItem('token', token);
          this.cookieService.set('token', token, { expires: 2, sameSite: 'Lax' });

          localStorage.setItem('user', JSON.stringify(user));
          this.cookieService.set('user', JSON.stringify(user), {
            expires: 2,
            sameSite: 'Lax',
          });
        }

        return user;
      }),
    );
  }
}
