import type { InputType } from '@storybook/csf';

export const DISABLED: InputType = {
  name: 'disabled?',
  description: `Состояние интерактивности`,
  table: {
    category: 'Inputs',
    type: { summary: 'boolean' },
    defaultValue: { summary: false },
  },
};
