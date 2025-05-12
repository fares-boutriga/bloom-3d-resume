
import { useTranslation } from '@/hooks/useTranslation';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Globe } from 'lucide-react';

const About = () => {
  // Skills categories with icons
      const { t } = useTranslation();
  
  const skills = [
    {
      category: 'Frontend',
      icon: <Layout className="w-6 h-6 text-accent" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Three.js']
    },
    {
      category: 'Backend',
      icon: <Database className="w-6 h-6 text-accent" />,
      technologies: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'GraphQL']
    },
    {
      category: 'Languages',
      icon: <Code className="w-6 h-6 text-accent" />,
      technologies: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'Python', 'SQL']
    },
    {
      category: 'Other',
      icon: <Globe className="w-6 h-6 text-accent" />,
      technologies: ['Git', 'CI/CD', 'Docker', 'AWS', 'Figma', 'SEO']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="section-padding bg-secondary/10">
      <div className="container">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient">{t('about')}</span>
          </h2>
          <p className="text-foreground/70 text-lg">
          {t('aboutDescription')}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-display font-semibold mb-4">{t('description')}</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="glass-panel p-6 rounded-xl"
                >
                  <div className="flex items-center mb-3">
                    {skill.icon}
                    <h4 className="text-lg font-semibold ml-2">{skill.category}</h4>
                  </div>
                  <ul className="space-y-1 text-foreground/70">
                    {skill.technologies.map((tech, techIndex) => (
                      <li key={techIndex}>{tech}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="order-1 md:order-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative">
              <div className="glass-panel rounded-xl p-1">
                <div className="aspect-square bg-gradient-to-br from-accent to-primary rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=2000"
                    alt="Professional headshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass-panel rounded-xl p-4 shadow-lg">
                <p className="text-lg font-semibold"> {t('experience')}</p>
                <p className="text-foreground/70 text-sm">{t('skills')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
