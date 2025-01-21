import type { InputType } from '@storybook/csf';

import { ButtonSize } from '@my-lib/components/buttons';

import { BACKGROUND_SIZE_TABLE, BACKGROUND_TYPE } from '@storybook-common/stories/arg-types';

const getIconSizeArgType = (size: ButtonSize, isMaxSize = false): InputType => ({
  name: `--button__icon_size_${size}`,
  description: `Размер иконки для размера ${size.toUpperCase()}${isMaxSize ? '' : ' и больше'}`,
  table: { ...BACKGROUND_SIZE_TABLE },
});

const iconSizes = {
  iconSizeXs: getIconSizeArgType('xs'),
  iconSizeS: getIconSizeArgType('s'),
  iconSizeM: getIconSizeArgType('m'),
  iconSizeL: getIconSizeArgType('l'),
  iconSizeXl: getIconSizeArgType('xl', true),
};

export const CSS_VARIABLES_ARG_TYPES = {
  ...iconSizes,
  colorText: {
    name: '--button__text_color',
    description: `Цвет текста кнопки`,
    control: 'color',
    table: {
      category: 'css-переменные',
      type: { summary: '<color>' },
    },
  },
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
    name: '--button__overlay_color',
    description: `Цвет оверлея кнопки`,
    control: 'color',
    table: {
      category: 'css-переменные',
      type: BACKGROUND_TYPE,
    },
  },
};
