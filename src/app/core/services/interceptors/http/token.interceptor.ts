import { HttpInterceptorFn } from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  // if (!localStorage.getItem('token')) return next(req);

  // const token = localStorage.getItem('token') || 'no-token';

  // if (!token) return next(req);

  // req = req.clone({
  //   headers: req.headers.set('Authorization', `Bearer ${token}`),
  // });

  return next(req);
};
