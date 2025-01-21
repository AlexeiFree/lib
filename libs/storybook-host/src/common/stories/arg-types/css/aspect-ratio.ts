const ASPECT_RATIO_DETAIL = `
aspect-ratio = 
  auto     ||
  <ratio>  

<ratio> = 
  <number [0,∞]> [ / <number [0,∞]> ]?  
`;

const ASPECT_RATIO_TYPE = {
  summary: '<aspect-ratio>',
  detail: ASPECT_RATIO_DETAIL,
};

export const ASPECT_RATIO_TABLE = {
  category: 'css-переменные',
  type: ASPECT_RATIO_TYPE,
};
