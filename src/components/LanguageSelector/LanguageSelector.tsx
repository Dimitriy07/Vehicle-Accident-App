import { useTranslation } from "react-i18next";
import { useState } from "react";
import styles from "./LanguageSelector.module.css";

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState(i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
  };

  return (
    <div className={styles.languageSelector}>
      <select
        value={selectedLang}
        onChange={(e) => changeLanguage(e.target.value)}
        className={styles.select}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
