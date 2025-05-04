
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation, TranslationKey } from '@/data/translations';

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey) => {
    return getTranslation(key, language);
  };
  
  return { t, language };
};
