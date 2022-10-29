import messagesUa from './ua';
import messagesEn from './en';
import messagesRu from './ru';

export const LOCALES = {
  UKRAINIAN: 'uk-UA',
  ENGLISH: 'en-US',
  RUSSIAN: 'ru-RU',
};

export const messages = {
  [LOCALES.UKRAINIAN]: messagesUa,
  [LOCALES.ENGLISH]: messagesEn,
  [LOCALES.RUSSIAN]: messagesRu,
};
