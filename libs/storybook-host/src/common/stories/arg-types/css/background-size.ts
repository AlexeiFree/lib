const BACKGROUND_SIZE_DETAIL = `
<bg-size> = [<length-percentage [0,∞]> | auto]{1,2} | cover | contain

<length-percentage> = <length> | <percentage>`;

const BACKGROUND_SIZE_TYPE = {
  summary: '<bg-size>',
  detail: BACKGROUND_SIZE_DETAIL,
};

export const BACKGROUND_SIZE_TABLE = {
  category: 'css-переменные',
  type: BACKGROUND_SIZE_TYPE,
};
