
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/i18n/translations';

export const useTranslation = () => {
  const { language } = useLanguage();

  // Get a translation for a specific key
  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return { t };
};
