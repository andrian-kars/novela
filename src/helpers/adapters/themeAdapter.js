export class ThemeAdapter {
  #theme = { color: 'light', background: 'dark' };

  get theme() {
    return this.#theme;
  }

  set theme(newTheme) {
    this.#theme = newTheme;
  }
}
