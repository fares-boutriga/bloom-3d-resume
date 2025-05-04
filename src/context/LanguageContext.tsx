
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr' | 'ar';

// Language context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  dir: 'ltr' | 'rtl';
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  dir: 'ltr',
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Try to get language from localStorage or default to 'en'
  const [language, setLanguage] = useState<Language>(
    () => (localStorage.getItem('language') as Language) || 'en'
  );
  
  // Determine text direction based on language
  const dir = language === 'ar' ? 'rtl' : 'ltr';
  
  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // Update dir attribute on html element
    document.documentElement.dir = dir;
    // Update lang attribute on html element
    document.documentElement.lang = language;
  }, [language, dir]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};
