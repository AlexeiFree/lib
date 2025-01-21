const SRC_SET_DETAIL = `
type GraphicSourceSet = {
  mobile?: string;
  tablet?: string;
  desktopXs?: string;
  desktopS?: string;
  desktopM?: string;
  desktopL?: string;
  desktopXl?: string;
}`;

export const SRC_SET_ARG_TYPE = {
  name: 'srcSet?',
  description: 'Набор путей к картинкам',
  table: {
    category: 'Inputs',
    type: {
      summary: 'GraphicSourceSet',
      detail: SRC_SET_DETAIL,
    },
  },
};

export const SRC_ARG_TYPE = {
  name: 'src?',
  description: `Путь к картинке`,
  table: {
    category: 'Inputs',
    type: { summary: 'string' },
  },
};

export const ALT_ARG_TYPE = {
  name: 'alt?',
  description: `Альтернативное текстовое описание изображения`,
  table: {
    category: 'Inputs',
    type: { summary: `string` },
  },
};

export const TITLE_ARG_TYPE = {
  name: 'title?',
  description: `Рекомендательная информация об изображении`,
  table: {
    category: 'Inputs',
    type: { summary: `string` },
  },
};
