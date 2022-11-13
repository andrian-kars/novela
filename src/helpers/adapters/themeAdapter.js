import { themeHelper } from 'src/helpers/themeHelper';

export class ThemeAdapter {
  #theme = themeHelper();

  get theme() {
    return this.#theme;
  }

  set theme(newTheme) {
    this.#theme = themeHelper(newTheme);
  }
}
