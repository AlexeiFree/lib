import type { SpinnerSize, SpinnerType } from '@my-lib/components/spinner';

import type { ButtonColor, ButtonSize } from './types';
import { ButtonInteractivityProps } from './types';

export const getSpinnerType = (buttonColor: ButtonColor = 'primary'): SpinnerType => {
  switch (buttonColor) {
    case 'primary':
      return 'always-white';
    case 'alternative':
      return 'inverted';
    case 'always-white':
      return 'always-black';
    case 'negative':
      return 'negative';
    default:
      return 'default';
  }
};

export const getSpinnerSize = (buttonSize: ButtonSize = 'm'): SpinnerSize => {
  switch (buttonSize) {
    case 'xs':
    case 's':
      return 's';
    default:
      return 'm';
  }
};

export const isButtonBlocked = (props: ButtonInteractivityProps): boolean => Boolean(props.disabled || props.loading);
export const isButtonLoading = (props: ButtonInteractivityProps): boolean => Boolean(props.loading && !props.disabled);
