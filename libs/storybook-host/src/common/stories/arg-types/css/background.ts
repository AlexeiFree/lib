const BACKGROUND_DETAIL = `
<bg-layer> =
  <bg-image>                      ||
  <bg-position> [ / <bg-size> ]?  ||
  <repeat-style>                  ||
  <attachment>                    ||
  <visual-box>                    ||
  <visual-box>

<final-bg-layer> =
  <bg-image>                      ||
  <bg-position> [ / <bg-size> ]?  ||
  <repeat-style>                  ||
  <attachment>                    ||
  <visual-box>                    ||
  <visual-box>                    ||
  <background-color>`;

export const BACKGROUND_TYPE = { summary: '<bg-layer>#?, <final-bg-layer>', detail: BACKGROUND_DETAIL };
