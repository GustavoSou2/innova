interface EndpointsDetail {
  path: string;
  sub?: string[]
}

interface Endpoints {
  [key: string]: EndpointsDetail;
}

export interface Environment {
  production: boolean;
  version: string;
  apiUrl: string;
  apiVersion: string;
  endpoints: Endpoints;
}
