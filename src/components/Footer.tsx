
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import LanguageSelector from './LanguageSelector';
import { useTranslation } from '@/hooks/useTranslation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };
  
  return (
    <motion.footer 
      className="bg-secondary/30 border-t border-border/20 py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-display font-bold text-gradient mb-2">
              Portfolio
            </div>
            <p className="text-foreground/70">
              {t('tagline')}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              <SocialLinks />
              <LanguageSelector />
            </div>
            <p className="text-foreground/50 text-sm">
              © {currentYear} John Doe. {t('rights')}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
