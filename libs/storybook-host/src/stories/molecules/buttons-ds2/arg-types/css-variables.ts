import type { InputType } from '@storybook/csf';

import { ButtonSize } from '@my-lib/components/buttons';

import { BACKGROUND_SIZE_TABLE, BACKGROUND_TYPE } from '@storybook-common/stories/arg-types';

const getIconSizeArgType = (size: ButtonSize, isMaxSize = false): InputType => ({
  name: `--button__icon_size_${size}`,
  description: `Размер иконки для размера ${size.toUpperCase()}${isMaxSize ? '' : ' и больше'}`,
  table: { ...BACKGROUND_SIZE_TABLE },
});

export const ICON_SIZES_ARG_TYPES = {
  iconSizeXs: getIconSizeArgType('xs'),
  iconSizeS: getIconSizeArgType('s'),
  iconSizeM: getIconSizeArgType('m'),
  iconSizeL: getIconSizeArgType('l'),
  iconSizeXl: getIconSizeArgType('xl', true),
};

export const CONTENT_COLOR_ARG_TYPE = {
  name: '--button__content_color',
  description: `Цвет контента кнопки`,
  control: 'color',
  table: {
    category: 'css-переменные',
    type: { summary: '<color>' },
  },
};

export const BASE_CSS_VARIABLES_ARG_TYPES = {
  colorBackground: {
    name: '--button__background',
    description: `Цвет фона кнопки`,
    control: 'color',
    table: {
      category: 'css-переменные',
      type: BACKGROUND_TYPE,
    },
  },
  colorOverlay: {
    name: '--button__hover-overlay_color',
    description: `Цвет оверлея кнопки, который отображается при наведении курсора`,
    control: 'color',
    table: {
      category: 'css-переменные',
      type: BACKGROUND_TYPE,
    },
  },
};
