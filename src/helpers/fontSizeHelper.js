import { storageGetParsed, storageSetItem } from 'src/helpers/storageHelper';

export const fontSizeHelper = (size) => {
  if (!storageGetParsed('font-size')) {
    storageSetItem('font-size', 22);
  }
  if (size) {
    storageSetItem('font-size', size);
  }
  return storageGetParsed('font-size');
};
