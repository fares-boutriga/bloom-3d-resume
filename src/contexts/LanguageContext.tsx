import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'fr' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  direction: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize language from localStorage or browser language
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage) return savedLanguage;

    const browserLang = navigator.language.split('-')[0]; // e.g., 'fr-FR' → 'fr'
    const supportedLanguages: Language[] = ['en', 'fr', 'ar'];
    return supportedLanguages.includes(browserLang as Language) ? (browserLang as Language) : 'en';
  });

  // Determine text direction based on language
  const direction: 'ltr' | 'rtl' = language === 'ar' ? 'rtl' : 'ltr';

  // Update localStorage and state when language changes
  const setLanguage = (newLanguage: Language) => {
    localStorage.setItem('language', newLanguage);
    setLanguageState(newLanguage);
  };

  // Update HTML attributes when language or direction changes
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
  }, [language, direction]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, direction }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};