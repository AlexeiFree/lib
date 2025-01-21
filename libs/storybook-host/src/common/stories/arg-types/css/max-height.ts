import { CALC_DATA_TYPE, LENGTH_PERCENTAGE_DATA_TYPE } from './css-data-types';

const MAX_HEIGHT_DETAIL = `
max-height = 
  none                                      |
  <length-percentage [0,∞]>                 |
  min-content                               |
  max-content                               |
  fit-content( <length-percentage [0,∞]> )  |
  <calc-size()>                             

${LENGTH_PERCENTAGE_DATA_TYPE}

${CALC_DATA_TYPE}   
`;

const MAX_HEIGHT_TYPE = {
  summary: '<max-height>',
  detail: MAX_HEIGHT_DETAIL,
};

export const MAX_HEIGHT_TABLE = {
  category: 'css-переменные',
  type: MAX_HEIGHT_TYPE,
};
