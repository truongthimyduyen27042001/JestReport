import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getSessionStorage } from 'utils/storage';
import { I18N_DATA, DEFAULT_LANGUAGE } from 'config/constants';

const currentLanguage = getSessionStorage<string>('language');

export default use(initReactI18next).init({
  lng: currentLanguage || DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  resources: {
    en: {
      translation: I18N_DATA.en,
    },
  },
});
