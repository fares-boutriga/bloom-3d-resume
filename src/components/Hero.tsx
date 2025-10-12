
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Scene3D from './Scene3D';
import { useTranslation } from '@/hooks/useTranslation';

const Hero = () => {
    const { t } = useTranslation();
  
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>
      
      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-accent font-medium mb-2">{t('hello')}</p>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-5xl md:text-7xl font-display font-bold mb-4"
          >
            <span className="text-gradient">{t('name')}</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-3xl md:text-5xl font-display font-semibold mb-6 text-foreground/80"
          >
            {t('tagline')}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xl text-foreground/70 mb-8 max-w-2xl"
          >
            {t('description')}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" asChild className="text-md">
              <a href="#projects">{t('viewWork')}</a>
            </Button>
            <Button variant="outline" size="lg" className="text-md border-gradient">
            <a href="#contact">{t('contactMe')}</a>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-foreground/70 hover:text-accent transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
