export const MOV_DAILY = 'MOV_DAILY';
export const MOV_WEEKLY = 'MOV_WEEKLY';

export const daily = () => {
  return {
    type: 'MOV_DAILY',
  };
};

export const weekly = () => {
  return {
    type: 'MOV_WEEKLY',
  };
};
