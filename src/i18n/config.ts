import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import pt from './locales/pt/translation.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        resources: {
            en: {
                translations: en,
            },
            es: {
                translations: es,
            },
            pt: {
                translations: pt,
            },
        },
        defaultNS: 'translations',
    });

export default i18n;
