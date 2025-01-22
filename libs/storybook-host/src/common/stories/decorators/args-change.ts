import { addons } from '@storybook/addons';
import { ICollection, StoryFnAngularReturnType } from '@storybook/angular/dist/ts3.9/client/preview/types';
import { AngularFramework } from '@storybook/angular/dist/ts3.9/client/preview/types-6-0';
import { STORY_CHANGED } from '@storybook/core-events';
import { StoryContext } from '@storybook/csf';
import { PartialStoryFn } from '@storybook/csf/dist/story';

export const argsChange = <TArgs>(
  callback: (context: StoryContext<AngularFramework, TArgs>, story: StoryFnAngularReturnType) => void,
  trackingArg?: string,
): ((
  getStory: PartialStoryFn<AngularFramework, TArgs>,
  context: StoryContext<AngularFramework, TArgs>,
) => AngularFramework['storyResult']) => {
  let prevArgs: ICollection | undefined;
  const areArgsChanged = (args: ICollection): boolean => {
    if (!prevArgs) {
      return false;
    }

    if (trackingArg) {
      return prevArgs[trackingArg] !== args[trackingArg];
    }

    return JSON.stringify(args) !== JSON.stringify(prevArgs);
  };

  return (getStory, context) => {
    const story = getStory();
    const { props } = story;

    if (!prevArgs) {
      addons.getChannel().once(STORY_CHANGED, () => {
        prevArgs = undefined;
      });
    } else if (areArgsChanged(props!)) {
      callback(context, story);
    }

    prevArgs = props;

    return story;
  };
};
