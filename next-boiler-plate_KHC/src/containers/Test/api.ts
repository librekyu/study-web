import axios from 'axios';
import { ApiRequest } from '../../utils/AxiosUtils';

export const testApi: ApiRequest<null, any> = () => {
  return axios.get(
    'http://api.dev-testvalley.ap-northeast-2.elasticbeanstalk.com/publications',
  );
};

export const khcTestApi: ApiRequest<null, any> = () => {
  const apiKey = '4e6e24144f040b5a1e6795b154b8b3df';
  const requestUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/';
  const val = 'searchWeeklyBoxOfficeList';
  const request =
    requestUrl + val + '?key=' + apiKey + '&targetDt=' + '20120101';
  return axios.get(request);
};
