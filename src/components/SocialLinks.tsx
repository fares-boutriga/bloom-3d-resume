
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: <Github size={20} />, 
      href: 'https://github.com/fares-boutriga' 
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin size={20} />, 
      href: 'https://www.linkedin.com/in/fares-boutriga-69a488222' 
    },
    // { 
    //   name: 'Twitter', 
    //   icon: <Twitter size={20} />, 
    //   href: 'https://twitter.com' 
    // },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      href: 'mailto:hello@example.com' 
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="flex items-center gap-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-accent transition-colors"
          variants={item}
          aria-label={link.name}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
