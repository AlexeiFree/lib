import { ANCHOR_ELEMENT_TARGETS } from '@my-lib/common/constants';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES, ButtonBaseDirective } from '@my-lib/components/buttons';

const iconSizesKeys = ['iconSizeXs', 'iconSizeS', 'iconSizeM', 'iconSizeL', 'iconSizeXl'];

export const ICON_SIZES_ARGS = Object.fromEntries(iconSizesKeys.map(key => [key, '']));
export const BASE_BUTTON_ARGS: Partial<ButtonBaseDirective> & Record<string, unknown> = {
  size: BUTTON_SIZES[2],
  color: BUTTON_COLORS[0],
  colorBackground: undefined,
  outerBackground: undefined,
  colorOverlay: undefined,
  disabled: false,
  loading: false,
  type: BUTTON_TYPES[0],
  href: '',
  target: ANCHOR_ELEMENT_TARGETS[0],
  spinnerType: undefined,
};
