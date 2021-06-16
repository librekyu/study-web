import React from 'react';
import { NextPage } from 'next';
import { ErrorProps } from 'next/error';

const CustomErrorPage: NextPage<ErrorProps> = ({
  statusCode,
  title,
}: ErrorProps) => {
  return <div>에러페이지</div>;
};

export default CustomErrorPage;
