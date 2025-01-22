const OBJECT_POSITION_DETAIL = `
object-position = 
  <position>  

<position> = 
  [ left | center | right | top | bottom | <length-percentage> ]  |
  [ left | center | right ] && [ top | center | bottom ]  |
  [ left | center | right | <length-percentage> ] [ top | center | bottom | <length-percentage> ]  |
  [ [ left | right ] <length-percentage> ] && [ [ top | bottom ] <length-percentage> ]  

<length-percentage> = 
  <length>      |
  <percentage>  
`;

const OBJECT_POSITION_TYPE = {
  summary: '<object-fit>',
  detail: OBJECT_POSITION_DETAIL,
};

export const OBJECT_POSITION_TABLE = {
  category: 'css-переменные',
  type: OBJECT_POSITION_TYPE,
};
