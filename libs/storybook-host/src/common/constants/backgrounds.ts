export const BACKGROUNDS = (
  [
    {
      name: 'Primary',
      value: '--color-background-primary',
    },
    {
      name: 'Primary Elevated',
      value: '--color-background-primary-elevated',
    },
    {
      name: 'Secondary',
      value: '--color-background-secondary',
    },
    {
      name: 'Secondary Elevated',
      value: '--color-background-secondary-elevated',
    },
    {
      name: 'Modal',
      value: '--color-background-modal',
    },
    {
      name: 'Inverted',
      value: '--color-background-inverted',
    },
    {
      name: 'Overlay',
      value: '--color-background-overlay',
    },
    {
      name: 'Lower',
      value: '--color-background-lower',
    },
  ] as const
).map(background => ({ ...background, value: `var(${background.value})` }));
