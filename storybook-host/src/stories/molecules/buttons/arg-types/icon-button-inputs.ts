import { BUTTON_COLORS, BUTTON_OUTER_BACKGROUNDS, BUTTON_SIZES, BUTTON_TYPES } from '@my-lib/components/buttons';

import { DISABLED, LOADING } from '@storybook-common/stories/arg-types';
import { HREF, TARGET } from '@storybook-common/stories/arg-types/anchor';
import { getUnion } from '@storybook-common/stories/utils';

import { ARG_TYPE_SPINNER_TYPE } from '../../spinner';

import { CSS_VARIABLES_ARG_TYPES } from './css-variables';

export const ICON_BUTTON_INPUTS_ARG_TYPES = {
  size: {
    name: 'size?',
    description: `Размер кнопки`,
    options: BUTTON_SIZES,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonSize', detail: getUnion(BUTTON_SIZES) },
      defaultValue: { summary: BUTTON_SIZES[2] },
    },
  },
  color: {
    name: 'color?',
    description: `Цвет кнопки`,
    options: BUTTON_COLORS,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonColor', detail: getUnion(BUTTON_COLORS) },
      defaultValue: { summary: BUTTON_COLORS[0] },
    },
  },
  outerBackground: {
    name: 'outerBackground?',
    description: `Цвет окружающего фона кнопки. Влияет на цвет кнопки`,
    options: [undefined, ...BUTTON_OUTER_BACKGROUNDS],
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonOuterBackground', detail: getUnion(BUTTON_OUTER_BACKGROUNDS) },
    },
  },
  disabled: DISABLED,
  loading: LOADING,
  iconSrc: {
    name: 'iconSrc?',
    description: `Url иконки`,
    table: {
      category: 'Inputs',
      type: { summary: 'string' },
    },
  },
  type: {
    name: 'type?',
    description: `Поведение кнопки в форме по умолчанию`,
    options: BUTTON_TYPES,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonType', detail: getUnion(BUTTON_TYPES) },
      defaultValue: { summary: BUTTON_TYPES[0] },
    },
  },
  href: HREF,
  target: TARGET,
  spinnerType: {
    ...ARG_TYPE_SPINNER_TYPE,
    name: 'spinnerType?',
  },
  ...CSS_VARIABLES_ARG_TYPES,
};
