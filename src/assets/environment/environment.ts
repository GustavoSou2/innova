import { Environment } from './environment.interface';

const environment: Environment = {
  production: false,
  version: '0.0.1',
  apiUrl: 'http://localhost:3333',
  apiVersion: 'v1',
  endpoints: {
    login: {
      path: '/auth/login',
    },
    register: {
      path: '/auth/signup',
    },
    auth: {
      path: '/auth',
      sub: ['login', 'signup', 'verify-code', 'send-code'],
    },
    sysCompany: {
      path: '/sys-company',
      sub: ['list', 'create', 'update', 'delete'],
    },
  },
};

export { environment };
