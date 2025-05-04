
import React from 'react';
import { Language, useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/hooks/useTranslation';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const languages = [
    { code: 'en' as Language, name: 'English' },
    { code: 'fr' as Language, name: 'Français' },
    { code: 'ar' as Language, name: 'العربية' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-accent" />
      <span className="text-foreground/70 text-sm hidden md:inline-block">{t('language')}:</span>
      <Select
        value={language}
        onValueChange={(value) => setLanguage(value as Language)}
      >
        <SelectTrigger className="w-[110px] h-8 text-sm border-foreground/20">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
