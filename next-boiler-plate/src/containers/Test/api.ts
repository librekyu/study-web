import api, { ApiRequest } from '../../utils/AxiosUtils';

export const testApi: ApiRequest<null, any> = () => {
  return api.get(`/test`);
};
