import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./data/language/english.js";
import japanese from "./data/language/japanese.js";
import bangla from "./data/language/bangla.js";
const resources = {
  en: {
    translation: english
  },
  jp: {
    translation: japanese
  },
  bn: {
    translation: bangla
  }
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  keySeparator: false, 
});

export default i18n;
