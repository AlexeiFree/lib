import { moduleMetadata } from '@storybook/angular';
import type { Meta, Story } from '@storybook/angular/types-6-0';

import { BUTTON_ICON_POSITIONS, ButtonComponent, ButtonsModule } from '@my-lib/components/buttons';

import { argsChange } from '@storybook-common/stories/decorators';
import { remountStory } from '@storybook-common/stories/utils';

import { BUTTON_INPUTS_ARG_TYPES } from './arg-types';
import { ICON_BUTTON_ARGS, ICON_SIZES } from './args';
import DESCRIPTION from './description.md';

const buttonArgs: Partial<ButtonComponent> & Record<string, unknown> = {
  text: 'Кнопка',
  iconPosition: BUTTON_ICON_POSITIONS[0],
  fluid: false,
  ...ICON_BUTTON_ARGS,
  ...ICON_SIZES,
};

export const Template: Story = props => {
  return {
    props,
    template: `
      <my-lib-button
        [style.margin]="'1rem 0'"
        [style.--button__text_color]="colorText"
        [style.--button__background]="colorBackground"
        [style.--button__icon_size_xs]="iconSizeXs"
        [style.--button__icon_size_s]="iconSizeS"
        [style.--button__icon_size_m]="iconSizeM"
        [style.--button__icon_size_l]="iconSizeL"
        [style.--button__icon_size_xl]="iconSizeXl"
        [style.--button__overlay_color]="colorOverlay"
        [text]="text"
        [loading]="loading"
        [iconPosition]="iconPosition"
        [iconSrc]="iconSrc"
        [color]="color"
        [href]="href"
        [fluid]="fluid"
        [target]="target"
        [size]="size"
        [disabled]="disabled"
        [outerBackground]="outerBackground"
        [type]="type"
        [spinnerType]="spinnerType"
      ></my-lib-button>
    `,
  };
};

export default {
  title: 'Молекулы/Кнопки-ДС2/Кнопка',
  parameters: {
    docs: {
      description: {
        component: DESCRIPTION,
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [ButtonsModule],
    }),
    argsChange(({ id }) => {
      remountStory(id);
    }),
  ],
  args: buttonArgs,
  argTypes: {
    ...BUTTON_INPUTS_ARG_TYPES,
  },
} as Meta;

Template.storyName = 'Кнопка';
