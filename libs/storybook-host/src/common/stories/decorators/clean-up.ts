import { addons } from '@storybook/addons';
import { ICollection, StoryFnAngularReturnType } from '@storybook/angular/dist/ts3.9/client/preview/types';
import { AngularFramework } from '@storybook/angular/dist/ts3.9/client/preview/types-6-0';
import { STORY_CHANGED } from '@storybook/core-events';
import { StoryContext } from '@storybook/csf';
import { PartialStoryFn } from '@storybook/csf/dist/story';

export const cleanUp = <TArgs>(
  callback: (context: StoryContext<AngularFramework, TArgs>, story: StoryFnAngularReturnType) => void,
): ((
  getStory: PartialStoryFn<AngularFramework, TArgs>,
  context: StoryContext<AngularFramework, TArgs>,
) => AngularFramework['storyResult']) => {
  let prevArgs: ICollection | undefined;

  return (getStory, context) => {
    const story = getStory();
    const { props } = story;

    if (!prevArgs) {
      addons.getChannel().once(STORY_CHANGED, () => {
        callback(context, story);
        prevArgs = undefined;
      });
    }

    prevArgs = props;

    return story;
  };
};
