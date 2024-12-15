import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "./locales/en.json";
import ru from "./locales/ru.json";

i18n
  .use(initReactI18next) // Passes `i18n` instance to `react-i18next`
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
