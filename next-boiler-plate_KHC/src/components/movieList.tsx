import React, { useEffect, useState } from 'react';
import { khcTestApi } from '@src/containers/Test/api';
import { connect } from 'react-redux';
import { useSelector } from 'react-redux';
import send from '@src/utils/SlackUtils';
import { RootState } from '@src/reducers';
import axios from 'axios';

function Page({ data }) {
  const [movIds, setMovIds] = useState('');
  const movieList = data.map((item) => item.titleKorean).toString();
  setMovIds(movieList + '>>>>>>>>>>>>>>>>>>>>>>>');
  return <>{data}</>;
}

export default Page;
