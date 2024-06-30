import { Inject, Injectable } from '@angular/core';
import { environment } from '../../../../assets/environment/environment';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';
import { ResponseMany } from '../../middleware/response-many/response-many.middleware';
import { ResponseOne } from '../../middleware/response/response.middleware';

interface GetRequest {
  path: string;
  params?: {
    [key: string]: any;
  };
  headers?: {
    [key: string]: any;
  };
  responseType?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService<T> {
  private url = `${environment.apiUrl}`; // Replace with your API url

  constructor(private readonly http: HttpClient) {}

  get(data: GetRequest) {
    let { path, headers, params, responseType = 'json' } = data;

    if (!path) {
      return;
    }

    return this.http
      .get(this.url + path, {
        headers,
        params,
      })
      .pipe(
        map(
          (res) => new ResponseMany<T>(<T>res),
          catchError((error) => error),
        ),
      );
  }

  find() {
    // return this.get();
  }

  post(path: string, body: any) {
    return this.http.post(this.url + path, body).pipe(map((res) => new ResponseOne(res)));
  }
}
