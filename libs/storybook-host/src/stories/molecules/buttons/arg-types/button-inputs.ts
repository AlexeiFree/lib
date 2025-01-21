import { BUTTON_ICON_POSITIONS } from '@my-lib/components/buttons';

import { getUnion } from '@storybook-common/stories/utils';

import { ICON_BUTTON_INPUTS_ARG_TYPES } from './icon-button-inputs';

export const BUTTON_INPUTS_ARG_TYPES = {
  fluid: {
    name: 'fluid?',
    description: `Растягивает на всю ширину`,
    table: {
      category: 'Inputs',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  iconPosition: {
    name: 'iconPosition?',
    description: `Размещение иконки относительно текста`,
    options: BUTTON_ICON_POSITIONS,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonIconPosition', detail: getUnion(BUTTON_ICON_POSITIONS) },
      defaultValue: { summary: BUTTON_ICON_POSITIONS[0] },
    },
  },
  text: {
    name: 'text?',
    description: `Текст кнопки`,
    table: {
      category: 'Inputs',
      type: { summary: 'string' },
    },
  },
  ...ICON_BUTTON_INPUTS_ARG_TYPES,
};
