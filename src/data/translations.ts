
// Define the structure of our translations
export type TranslationKey = 
  | 'header.title'
  | 'header.subtitle'
  | 'nav.home'
  | 'nav.about'
  | 'nav.projects'
  | 'nav.testimonials'
  | 'nav.contact'
  | 'about.title'
  | 'about.description'
  | 'about.skills'
  | 'about.experience'
  | 'projects.title'
  | 'projects.description'
  | 'projects.liveDemo'
  | 'projects.viewCode'
  | 'testimonials.title'
  | 'testimonials.description'
  | 'contact.title'
  | 'contact.description'
  | 'contact.name'
  | 'contact.email'
  | 'contact.subject'
  | 'contact.message'
  | 'contact.send'
  | 'contact.info'
  | 'contact.phone'
  | 'contact.location'
  | 'footer.rights'
  | 'footer.experience'
  | 'footer.fullstack'
  | 'language.english'
  | 'language.french'
  | 'language.arabic'
  | 'common.scrollDown';

// Define translations object
type Translations = {
  [key in TranslationKey]: {
    en: string;
    fr: string;
    ar: string;
  };
};

// Translations data
export const translations: Translations = {
  'header.title': {
    en: 'John Doe.',
    fr: 'John Doe.',
    ar: 'جون دو.',
  },
  'header.subtitle': {
    en: 'I build exceptional digital experiences.',
    fr: 'Je crée des expériences numériques exceptionnelles.',
    ar: 'أبني تجارب رقمية استثنائية.',
  },
  'nav.home': {
    en: 'Home',
    fr: 'Accueil',
    ar: 'الرئيسية',
  },
  'nav.about': {
    en: 'About',
    fr: 'À propos',
    ar: 'حول',
  },
  'nav.projects': {
    en: 'Projects',
    fr: 'Projets',
    ar: 'المشاريع',
  },
  'nav.testimonials': {
    en: 'Testimonials',
    fr: 'Témoignages',
    ar: 'الشهادات',
  },
  'nav.contact': {
    en: 'Contact',
    fr: 'Contact',
    ar: 'اتصل بنا',
  },
  'about.title': {
    en: 'About Me',
    fr: 'À propos de moi',
    ar: 'حول',
  },
  'about.description': {
    en: "I'm a passionate web developer with over 5 years of experience creating modern web applications.",
    fr: "Je suis un développeur web passionné avec plus de 5 ans d'expérience dans la création d'applications web modernes.",
    ar: "أنا مطور ويب شغوف بخبرة تزيد عن 5 سنوات في إنشاء تطبيقات ويب حديثة.",
  },
  'about.skills': {
    en: 'My Skills & Expertise',
    fr: 'Mes compétences et expertise',
    ar: 'مهاراتي وخبراتي',
  },
  'about.experience': {
    en: 'Years Experience',
    fr: "Années d'expérience",
    ar: 'سنوات الخبرة',
  },
  'projects.title': {
    en: 'Featured Projects',
    fr: 'Projets en vedette',
    ar: 'مشاريع مميزة',
  },
  'projects.description': {
    en: 'Here are some of my recent projects that showcase my skills and expertise in web development.',
    fr: 'Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et mon expertise en développement web.',
    ar: 'إليك بعض مشاريعي الأخيرة التي تعرض مهاراتي وخبرتي في تطوير الويب.',
  },
  'projects.liveDemo': {
    en: 'Live Demo',
    fr: 'Démo en direct',
    ar: 'عرض حي',
  },
  'projects.viewCode': {
    en: 'View Code',
    fr: 'Voir le code',
    ar: 'عرض الكود',
  },
  'testimonials.title': {
    en: 'Client Testimonials',
    fr: 'Témoignages de clients',
    ar: 'شهادات العملاء',
  },
  'testimonials.description': {
    en: "Don't just take my word for it. Here's what my clients have to say about working with me on their projects.",
    fr: "Ne vous fiez pas qu'à ma parole. Voici ce que mes clients ont à dire sur notre collaboration sur leurs projets.",
    ar: "لا تأخذ كلمتي فقط. إليك ما يقوله عملائي عن العمل معي في مشاريعهم.",
  },
  'contact.title': {
    en: 'Get In Touch',
    fr: 'Contactez-moi',
    ar: 'تواصل معي',
  },
  'contact.description': {
    en: "I'm always interested in hearing about new projects, opportunities, and connections.",
    fr: "Je suis toujours intéressé à en savoir plus sur de nouveaux projets, opportunités et connexions.",
    ar: "أنا مهتم دائمًا بسماع المشاريع والفرص والاتصالات الجديدة.",
  },
  'contact.name': {
    en: 'Your Name',
    fr: 'Votre nom',
    ar: 'اسمك',
  },
  'contact.email': {
    en: 'Your Email',
    fr: 'Votre email',
    ar: 'بريدك الإلكتروني',
  },
  'contact.subject': {
    en: 'Subject',
    fr: 'Sujet',
    ar: 'الموضوع',
  },
  'contact.message': {
    en: 'Your Message',
    fr: 'Votre message',
    ar: 'رسالتك',
  },
  'contact.send': {
    en: 'Send Message',
    fr: 'Envoyer le message',
    ar: 'إرسال رسالة',
  },
  'contact.info': {
    en: 'Contact Information',
    fr: 'Informations de contact',
    ar: 'معلومات الاتصال',
  },
  'contact.phone': {
    en: 'Phone',
    fr: 'Téléphone',
    ar: 'هاتف',
  },
  'contact.location': {
    en: 'Location',
    fr: 'Emplacement',
    ar: 'الموقع',
  },
  'footer.rights': {
    en: 'All rights reserved.',
    fr: 'Tous droits réservés.',
    ar: 'جميع الحقوق محفوظة.',
  },
  'footer.experience': {
    en: 'Years Experience',
    fr: "Années d'expérience",
    ar: 'سنوات الخبرة',
  },
  'footer.fullstack': {
    en: 'Full Stack Development',
    fr: 'Développement Full Stack',
    ar: 'تطوير الويب المتكامل',
  },
  'language.english': {
    en: 'English',
    fr: 'Anglais',
    ar: 'الإنجليزية',
  },
  'language.french': {
    en: 'French',
    fr: 'Français',
    ar: 'الفرنسية',
  },
  'language.arabic': {
    en: 'Arabic',
    fr: 'Arabe',
    ar: 'العربية',
  },
  'common.scrollDown': {
    en: 'Scroll Down',
    fr: 'Défiler vers le bas',
    ar: 'مرر لأسفل',
  },
};

// Helper function to get translation
export const getTranslation = (key: TranslationKey, language: string): string => {
  // Return the translation for the key and language, or English if not found
  return translations[key]?.[language as keyof typeof translations[TranslationKey]] || translations[key].en;
};
