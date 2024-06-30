import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/landing-page/landing-page.component').then((m) => m.LandingPageComponent),
  },
  {
    path: 'u/:companyName',
    loadComponent: () => import('./views/company/company.component').then((m) => m.CompanyComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./views/home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./views/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'user',
    children: [
      {
        path: 'r',
        children: [
          {
            path: 'type',
            loadChildren: () => import('./views/user-type/user-type.module').then((m) => m.UserTypeModule),
          },
          {
            path: 'send-code',
            loadComponent: () =>
              import('./views/user-verification-send-code/user-verification-send-code.component').then(
                (m) => m.UserVerificationSendCodeComponent,
              ),
          },
          {
            path: 'verify-code',
            loadComponent: () =>
              import('./views/user-verification-code-validation/user-verification-code-validation.component').then(
                (m) => m.UserVerificationCodeValidationComponent,
              ),
          },
          {
            path: '',
            redirectTo: 'type',
            pathMatch: 'full',
          },
        ],
      },
      {
        path: '',
        redirectTo: 'r/type',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', redirectTo: 'lading-page', pathMatch: 'full' },
  { path: '**', redirectTo: 'lading-page', pathMatch: 'full' },
];
