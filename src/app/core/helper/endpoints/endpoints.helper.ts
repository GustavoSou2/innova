import { environment } from '../../../../assets/environment/environment';

const getEndpointPath = (endpoint: string, ...sub: string[]) => {
  const endpointOptions = environment.endpoints[endpoint];
  let url = '';

  if (sub.length != 0)
    url = sub.reduce((str: any, endpoint: string) => {
      if (!!endpointOptions?.sub && endpointOptions?.sub.includes(endpoint)) return `${str}/${endpoint}`;

      return '';
    }, '');

  return `${environment.endpoints[endpoint].path}${url}`;
};

export { getEndpointPath };
