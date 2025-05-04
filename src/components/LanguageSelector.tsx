
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/data/translations';
import { Button } from '@/components/ui/button';
import { Flag } from 'lucide-react';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const languages = [
    { code: 'en', name: getTranslation('language.english', language) },
    { code: 'fr', name: getTranslation('language.french', language) },
    { code: 'ar', name: getTranslation('language.arabic', language) },
  ];

  return (
    <motion.div 
      className="flex items-center space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Flag className="text-accent w-4 h-4" />
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            size="sm"
            variant={language === lang.code ? "default" : "ghost"}
            className={`text-xs px-2 py-1 h-auto ${language === lang.code ? 'bg-accent' : ''}`}
            onClick={() => setLanguage(lang.code as 'en' | 'fr' | 'ar')}
          >
            {lang.code.toUpperCase()}
          </Button>
        ))}
      </div>
    </motion.div>
  );
};

export default LanguageSelector;
