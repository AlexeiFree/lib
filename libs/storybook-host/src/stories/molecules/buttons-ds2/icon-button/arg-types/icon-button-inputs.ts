import {
  BASE_BUTTON_INPUTS_ARG_TYPES,
  BASE_CSS_VARIABLES_ARG_TYPES,
  CONTENT_COLOR_ARG_TYPE,
  ICON_SIZES_ARG_TYPES,
} from '../../arg-types';

export const ICON_BUTTON_INPUTS_ARG_TYPES = {
  iconSrc: {
    name: 'iconSrc',
    description: `Url иконки`,
    table: {
      category: 'Inputs',
      type: { summary: 'string' },
    },
  },
  ...BASE_BUTTON_INPUTS_ARG_TYPES,
  ...BASE_CSS_VARIABLES_ARG_TYPES,
  colorContent: CONTENT_COLOR_ARG_TYPE,
  ...ICON_SIZES_ARG_TYPES,
};
