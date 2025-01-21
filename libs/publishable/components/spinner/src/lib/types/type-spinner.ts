import type { Size } from '@my-lib/common/types';

import { SPINNER_TYPES } from '../constants';

export type SpinnerType = (typeof SPINNER_TYPES)[number];

export type SpinnerSize = Exclude<Size, 'xs' | 'xl'>;
