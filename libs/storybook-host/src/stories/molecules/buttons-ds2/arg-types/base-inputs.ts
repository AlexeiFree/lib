import { BUTTON_COLORS, BUTTON_OUTER_BACKGROUNDS, BUTTON_SIZES, BUTTON_TYPES } from '@my-lib/components/buttons';

import { DISABLED, LOADING } from '@storybook-common/stories/arg-types';
import { HREF, TARGET } from '@storybook-common/stories/arg-types/anchor';
import { getUnion } from '@storybook-common/stories/utils';

import { ARG_TYPE_SPINNER_TYPE } from '../../spinner';

export const BASE_BUTTON_INPUTS_ARG_TYPES = {
  size: {
    name: 'size?',
    description: `Размер кнопки.`,
    options: BUTTON_SIZES,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonSize', detail: getUnion(BUTTON_SIZES) },
      defaultValue: { summary: BUTTON_SIZES[2] },
    },
  },
  color: {
    name: 'color?',
    description: `Цвет кнопки. Это общий пресет, который устанавливает цвет фона, текста, иконок
        и спиннера, отображающегося в состоянии loading кнопки.`,
    options: BUTTON_COLORS,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonColor', detail: getUnion(BUTTON_COLORS) },
      defaultValue: { summary: BUTTON_COLORS[0] },
    },
  },
  outerBackground: {
    name: 'outerBackground?',
    description: `Цвет окружающего фона кнопки. Изменяет стили color-пресетов.`,
    options: [undefined, ...BUTTON_OUTER_BACKGROUNDS],
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonOuterBackground', detail: getUnion(BUTTON_OUTER_BACKGROUNDS) },
    },
  },
  spinnerType: {
    ...ARG_TYPE_SPINNER_TYPE,
    name: 'spinnerType?',
    description: `Заменяет цвет спиннера, заданный с помощью color-пресета.`,
    table: {
      ...ARG_TYPE_SPINNER_TYPE.table,
      defaultValue: undefined,
    },
  },
  disabled: {
    ...DISABLED,
    description: `Состояние неинтерактивности. В этом состоянии кнопка не интерактивна и меняет цвет.`,
  },
  loading: {
    ...LOADING,
    description: `Состояние загрузки. В этом состоянии кнопка не интерактивна, а вместо ее содержимого отображается спиннер.`,
  },
  href: { ...HREF, description: `Url кнопки. Если указан, кнопка ведет себя как ссылка.` },
  target: TARGET,
  type: {
    name: 'type?',
    description: `Поведение кнопки в форме по умолчанию. Не действует при установленном href.

    submit: Кнопка отправляет данные формы на сервер.

    reset: Кнопка сбрасывает все элементы управления к их начальным значениям. Удаляет данные, введенные в форму.

    button: Кнопка не имеет поведения по умолчанию.`,
    options: BUTTON_TYPES,
    control: 'select',
    table: {
      category: 'Inputs',
      type: { summary: 'ButtonType', detail: getUnion(BUTTON_TYPES) },
      defaultValue: { summary: BUTTON_TYPES[0] },
    },
  },
};
