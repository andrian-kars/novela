import { fontSizeHelper } from 'src/helpers/fontSizeHelper';

export class FontSizeAdapter {
  #size = fontSizeHelper();

  get size() {
    return this.#size;
  }

  set size(newSize) {
    this.#size = fontSizeHelper(newSize);
  }
}
