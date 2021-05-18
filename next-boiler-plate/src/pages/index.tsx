import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from '@commons/style/themes/styled';

function IndexPage(): JSX.Element {
  return (
    <div>
      <h1>스터디</h1>
      시작점 여기서부터 알아서 해라
    </div>
  );
}

export default IndexPage;
