import { Provider } from '@angular/core';
import { StoryFnAngularReturnType } from '@storybook/angular/dist/ts3.9/client/preview/types';
import { AngularFramework } from '@storybook/angular/dist/ts3.9/client/preview/types-6-0';
import { StoryContext } from '@storybook/csf';
import { PartialStoryFn } from '@storybook/csf/dist/story';

export const providers = <TArgs>(
  getProviders: (story: StoryFnAngularReturnType, context: StoryContext<AngularFramework, TArgs>) => Provider[],
): ((
  getStory: PartialStoryFn<AngularFramework, TArgs>,
  context: StoryContext<AngularFramework, TArgs>,
) => AngularFramework['storyResult']) => {
  return (getStory, context) => {
    const story = getStory();

    story.moduleMetadata?.providers?.push(getProviders(story, context));

    return story;
  };
};
