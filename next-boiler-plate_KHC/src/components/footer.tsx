import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import { khcTestApi } from '@src/containers/Test/api';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Buttons } from '@src/components/swapButtons';

const Footer = () => {
  return (
    <>
      <div>
        <b>footer</b>
      </div>
    </>
  );
};

export default Footer;
