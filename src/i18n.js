import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: require("./locales/en/translation.json") },
            cz: { translation: require("./locales/cz/translation.json") },
            pl: { translation: require("./locales/pl/translation.json") },
        },
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
    });

export default i18n;