import { storageGetParsed, storageSetItem } from 'src/helpers/storageHelper';

export const themeHelper = (newTheme) => {
  if (storageGetParsed('theme') === null) {
    storageSetItem('theme', { color: 'light', background: 'dark' });
  }
  if (newTheme) {
    storageSetItem('theme', newTheme);
  }

  return storageGetParsed('theme');
};
