import { addons } from '@storybook/addons';
import { FORCE_REMOUNT } from '@storybook/core-events';

export const remountStory = (storyId: string): void => {
  addons.getChannel().emit(FORCE_REMOUNT, { storyId });
};
