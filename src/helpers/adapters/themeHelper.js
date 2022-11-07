export const themeHelper = (newTheme) => {
  if (JSON.parse(localStorage.getItem('theme')) === null) {
    localStorage.setItem('theme', JSON.stringify({ color: 'light', background: 'dark' }));
  }

  if (newTheme) {
    localStorage.setItem('theme', JSON.stringify(newTheme));
  }

  return JSON.parse(localStorage.getItem('theme'));
};
