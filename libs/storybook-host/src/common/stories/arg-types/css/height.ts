import { CALC_DATA_TYPE, LENGTH_PERCENTAGE_DATA_TYPE } from './css-data-types';

const HEIGHT_DETAIL = `
height = 
  auto                                      |
  <length-percentage [0,∞]>                 |
  min-content                               |
  max-content                               |
  fit-content( <length-percentage [0,∞]> )  |
  <calc-size()>                             

${LENGTH_PERCENTAGE_DATA_TYPE}

${CALC_DATA_TYPE}        
`;

const HEIGHT_TYPE = {
  summary: '<height>',
  detail: HEIGHT_DETAIL,
};

export const HEIGHT_TABLE = {
  category: 'css-переменные',
  type: HEIGHT_TYPE,
};
