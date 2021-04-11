import { InputItemType, OutputItemType } from '@src/common/types';

export const InputArray = [
  {
    id: 0,
    name: '김홍철',
    phone: '01012341234',
  },
  {
    id: 1,
    name: '김홍규',
    phone: '01012341234',
  },
  {
    id: 2,
    name: '백종훈',
    phone: '01012341234',
  },
  {
    id: 3,
    name: '김홍철',
    phone: '01044444444',
  },
] as InputItemType[];

export const OutputArray = {
  0: '김홍철 (010-1234-1234)',
  1: '김홍규 (010-1234-1234)',
  2: '백종훈 (010-1234-1234)',
  3: '김홍철 (010-4444-4444)',
} as OutputItemType;

export const inputPhone = '01012341234';
export const outputPhone = '010-1234-1234';
