import axios from 'axios';
import { ApiRequest } from '../../utils/AxiosUtils';
import { useSelector } from 'react-redux';

export const testApi: ApiRequest<null, any> = () => {
  return axios.get(
    'http://api.dev-testvalley.ap-northeast-2.elasticbeanstalk.com/publications',
  );
};

export const khcTestApi: ApiRequest<null, any> = () => {
  const { value } = useSelector((state) => state.value);

  const apiKey = '4e6e24144f040b5a1e6795b154b8b3df';
  const requestUrl =
    'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/';
  let val;
  if (value === 0) {
    val = 'searchWeeklyBoxOfficeList.json';
  } else if (value === 1) {
    val = 'searchDailyBoxOfficeList.json';
  }
  const request =
    requestUrl + val + '?key=' + apiKey + '&targetDt=' + '20120101';
  return axios.get(request);
};
