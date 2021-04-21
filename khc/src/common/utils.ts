import { InputItemType, OutputItemType } from './types';

/**
 * normalize
 */
export const convert = (input: InputItemType[]): OutputItemType => {
  const returnOutput = {} as OutputItemType;
  input.map((item) => {
    returnOutput[item.id] = `${item.name} (${convertPhone(item.phone)})`;
  });
  return returnOutput;
};

/** 01012341234 -> 010-1234-1234로 변경하는 함수 */
export const convertPhone = (input: string): string => {
  if (!input) return '';
  const head = input.substr(0, 3);
  const body = input.substr(3, 4);
  const tail = input.substr(7, 4);
  return `${head}-${body}-${tail}`;
};
