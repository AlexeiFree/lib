import type { InputType } from '@storybook/csf';

export const LOADING: InputType = {
  name: 'loading?',
  description: `Состояние загрузки`,
  table: {
    category: 'Inputs',
    type: { summary: 'boolean' },
    defaultValue: { summary: false },
  },
};
