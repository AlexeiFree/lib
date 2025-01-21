import { ANCHOR_ELEMENT_TARGETS } from '@my-lib/common/constants';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES, ButtonComponent } from '@my-lib/components/buttons';

const iconSizesKeys = ['iconSizeXs', 'iconSizeS', 'iconSizeM', 'iconSizeL', 'iconSizeXl'];

export const ICON_SIZES = Object.fromEntries(iconSizesKeys.map(key => [key, '']));
export const ICON_BUTTON_ARGS: Partial<ButtonComponent> & Record<string, unknown> = {
  iconSrc: '',
  size: BUTTON_SIZES[2],
  color: BUTTON_COLORS[0],
  colorText: undefined,
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
