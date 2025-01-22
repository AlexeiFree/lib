export const CALC_DATA_TYPE = `
<calc-size()> = 
  calc-size( <calc-size-basis> , <calc-sum>? )  

<calc-size-basis> = 
  <intrinsic-size-keyword>  |
  percentage                |
  <calc-size()>             |
  any                       |
  <calc-sum>                

<calc-sum> = 
  <calc-product> [ [ '+' | '-' ] <calc-product> ]*  

<calc-product> = 
  <calc-value> [ [ '*' | '/' ] <calc-value> ]*  

<calc-value> = 
  <number>        |
  <dimension>     |
  <percentage>    |
  <calc-keyword>  |
  ( <calc-sum> )  

<calc-keyword> = 
  e          |
  pi         |
  infinity   |
  -infinity  |
  NaN 
`;
