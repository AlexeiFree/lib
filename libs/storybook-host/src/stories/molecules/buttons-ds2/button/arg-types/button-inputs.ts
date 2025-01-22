import { BUTTON_ICON_POSITIONS } from '@my-lib/components/buttons';

import { getUnion } from '@storybook-common/stories/utils';

import {
  BASE_BUTTON_INPUTS_ARG_TYPES,
  BASE_CSS_VARIABLES_ARG_TYPES,
  CONTENT_COLOR_ARG_TYPE,
  ICON_SIZES_ARG_TYPES,
} from '../../arg-types';

export const BUTTON_INPUTS_ARG_TYPES = {
  text: {
    name: 'text',
    description: `Текст кнопки.`,
    table: {
      category: 'Inputs',
      type: { summary: 'string' },
    },
  },
  iconSrc: {
    name: 'iconSrc?',
    description: `Url иконки. Если задан, радом с текстом отображается иконка. Её расположение зависит от поля iconPosition.`,
    table: {
      category: 'Inputs',
      type: { summary: 'string' },
    },
  },
  iconPosition: {
    name: 'iconPosition?',
    description: `Расположение иконки относительно текста. Действует при установленном iconSrc.

    leading: слева от текста
    trailing: справа от текста`,
    options: BUTTON_ICON_POSITIONS,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonIconPosition', detail: getUnion(BUTTON_ICON_POSITIONS) },
      defaultValue: { summary: BUTTON_ICON_POSITIONS[0] },
    },
  },
  fluid: {
    name: 'fluid?',
    description: `Растягивает кнопку на ширину блочного родителя.`,
    table: {
      category: 'Inputs',
      type: { summary: 'boolean' },
      defaultValue: { summary: false },
    },
  },
  ...BASE_BUTTON_INPUTS_ARG_TYPES,
  ...BASE_CSS_VARIABLES_ARG_TYPES,
  colorContent: CONTENT_COLOR_ARG_TYPE,
  ...ICON_SIZES_ARG_TYPES,
};
