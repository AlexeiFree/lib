import type { Size } from '@my-lib/common/types';
import { AnchorElementTarget } from '@my-lib/common/types';
import type { SpinnerType } from '@my-lib/components/spinner';

import { BUTTON_COLORS, BUTTON_ICON_POSITIONS, BUTTON_OUTER_BACKGROUNDS, BUTTON_TYPES } from './constants';

export type ButtonColor = (typeof BUTTON_COLORS)[number];
export type ButtonSize = Size;
export type ButtonType = (typeof BUTTON_TYPES)[number];
export type ButtonOuterBackground = (typeof BUTTON_OUTER_BACKGROUNDS)[number];
export type ButtonIconPosition = (typeof BUTTON_ICON_POSITIONS)[number];

export interface ButtonInteractivityProps {
  disabled?: boolean;
  loading?: boolean;
}

export interface BaseButtonProps extends ButtonInteractivityProps {
  size?: ButtonSize;
  spinnerType?: SpinnerType;
  fluid?: boolean;
  color?: ButtonColor;
  outerBackground?: ButtonOuterBackground;
}

export interface LinkButtonProps extends BaseButtonProps {
  href?: string;
  target?: AnchorElementTarget;
}

export interface ActionButtonProps extends BaseButtonProps {
  type?: ButtonType;
}

export type ButtonProps = LinkButtonProps & ActionButtonProps;
