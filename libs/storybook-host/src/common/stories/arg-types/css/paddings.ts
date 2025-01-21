import { LENGTH_PERCENTAGE_DATA_TYPE } from './css-data-types';

const PADDINGS_DETAIL = `
padding = <'padding-top'>{1,4}

<padding-top> = <length-percentage [0,∞]>
${LENGTH_PERCENTAGE_DATA_TYPE}`;

const PADDINGS_TYPE = {
  summary: '<padding>',
  detail: PADDINGS_DETAIL,
};

export const PADDINGS_TABLE = {
  category: 'css-переменные',
  type: PADDINGS_TYPE,
};
