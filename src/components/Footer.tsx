
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/data/translations';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  
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
              {getTranslation('header.subtitle', language)}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-6">
              <LanguageSelector />
              <SocialLinks />
            </div>
            <p className="text-foreground/50 text-sm">
              © {currentYear} John Doe. {getTranslation('footer.rights', language)}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
