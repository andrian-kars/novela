export const storageGetParsed = (key) => JSON.parse(localStorage.getItem(`${key}`));
export const storageSetItem = (key, value) => localStorage.setItem(key, JSON.stringify(value));
