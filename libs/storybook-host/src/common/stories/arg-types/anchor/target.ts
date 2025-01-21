import type { InputType } from '@storybook/csf';

import { ANCHOR_ELEMENT_TARGETS } from '@my-lib/common/constants';

import { getUnion } from '@storybook-common/stories/utils';

export const TARGET: InputType = {
  name: 'target?',
  description: `Target ссылки`,
  options: ANCHOR_ELEMENT_TARGETS,
  control: {
    type: 'select',
  },
  table: {
    category: 'Inputs',
    type: { summary: 'AnchorElementTarget', detail: getUnion(ANCHOR_ELEMENT_TARGETS) },
    defaultValue: { summary: ANCHOR_ELEMENT_TARGETS[0] },
  },
};
