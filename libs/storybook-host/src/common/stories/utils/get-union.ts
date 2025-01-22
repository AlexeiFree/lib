export const getUnion = (options: readonly string[]): string => options.map(color => `'${color}'`).join(' | ');
