import { BackgroundsParameter } from '@storybook/addon-backgrounds/dist/ts3.9/types';
import { addons } from '@storybook/addons';
import { AngularFramework } from '@storybook/angular/dist/ts3.9/client/preview/types-6-0';
import { UPDATE_GLOBALS } from '@storybook/core-events';
import type { StoryContext } from '@storybook/csf';

import type { Background } from '../../types';

export const updateStoryBackground = (
  { parameters }: StoryContext<AngularFramework>,
  backgroundName: Background = parameters.backgrounds.default,
): void => {
  const backgrounds: BackgroundsParameter = parameters.backgrounds;
  const value = backgrounds.values.find(({ name }) => name === backgroundName)?.value;

  if (value) {
    addons.getChannel().emit(UPDATE_GLOBALS, {
      globals: {
        backgrounds: { value },
      },
    });
  }
};
