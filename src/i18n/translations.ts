
import { Language } from '../contexts/LanguageContext';

type TranslationKeys = {
  // Navbar
  home: string;
  aboutNav: string;
  projectsNav: string;
  testimonialsNav: string;
  contactNav: string;
  portfolio: string;
  resume: string;
  
  // Hero section
  hello: string;
  name: string;
  tagline: string;
  description: string;
  viewWork: string;
  contactMe: string;
  scrollDown: string;

  // About section
  about: string;
  aboutDescription: string;
  skills: string;
  experience: string;
  fullStack: string;

  // Projects section
  projects: string;
  projectsDescription: string;
  liveDemo: string;
  viewCode: string;

  // Testimonials section
  testimonials: string;
  testimonialsDescription: string;

  // Contact section
  contact: string;
  contactDescription: string;
  contactInformation: string;
  phone: string;
  email: string;
  location: string;
  phoneValue: string;
  emailValue: string;
  locationValue: string;
  connectWithMe: string;
  yourName: string;
  yourEmail: string;
  subject: string;
  yourMessage: string;
  sending: string;
  sendMessage: string;
  sendMeMessage: string;
  messageSent: string;
  messageSentDescription: string;

  // Footer
  rights: string;
  language: string;

};

type TranslationsType = {
  [key in Language]: TranslationKeys;
};

export const translations: TranslationsType = {
  en: {
    // Navbar
    home: "Home",
    aboutNav: "About",
    projectsNav: "Projects",
    testimonialsNav: "Testimonials",
    contactNav: "Contact",
    portfolio: "Portfolio",
    resume: "Resume",
    
    // Hero section
    hello: "Hello, my name is",
    name: "Fares Boutriga.",
    tagline: "I build exceptional digital experiences.",
    description: "I'm a web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.",
    viewWork: "View My Work",
    contactMe: "Contact Me",
    scrollDown: "Scroll Down",

    // About section
    about: "About Me",
    aboutDescription: "I'm a passionate web developer with over 2 years of experience creating modern web applications. My journey in web development began with a fascination for building interactive experiences, and has evolved into crafting professional, high-performance applications.",
    skills: "My Skills & Expertise",
    experience: "2+ Years Experience",
    fullStack: "Full Stack Development",

    // Projects section
    projects: "Featured Projects",
    projectsDescription: "Here are some of my recent projects that showcase my skills and expertise in web development. Each project represents unique challenges and solutions.",
    liveDemo: "Live Demo",
    viewCode: "View Code",

    // Testimonials section
    testimonials: "Client Testimonials",
    testimonialsDescription: "Don't just take my word for it. Here's what my clients have to say about working with me on their projects.",

    // Contact section
    contact: "Get In Touch",
    contactDescription: "I'm always interested in hearing about new projects, opportunities, and connections. Feel free to reach out if you want to collaborate or just say hello!",
    contactInformation: "I'm always interested in hearing about new projects, opportunities, and connections. Feel free to reach out if you want to collaborate or just say hello!",
    phone: "Phone",
    email: "Email",
    location: "Location",
    phoneValue: "+216 54 258 313",
    emailValue: "boutrigafares1999@gmail.com",
    locationValue: "Tunis, Tunisia",
    connectWithMe: "Connect With Me",
    yourName: "Your Name",
    yourEmail: "Your Email",
    subject: "Subject",
    yourMessage: "Your Message",
    sending: "Sending...",
    sendMessage: "Send Message",
    sendMeMessage: "Send Me a Message",
    messageSent: "Message sent!",
    messageSentDescription: "Thanks for reaching out. I'll get back to you soon.",

    // Footer
    rights: "All rights reserved.",
    language: "Language",

  },

  fr: {
    // Navbar
    home: "Accueil",
    aboutNav: "À Propos",
    projectsNav: "Projets",
    testimonialsNav: "Témoignages",
    contactNav: "Contact",
    portfolio: "Portfolio",
    resume: "CV",
    // Hero section
    hello: "Bonjour, je m'appelle",
    name: "Boutriga Fares.",
    tagline: "Je crée des expériences numériques exceptionnelles.",
    description: "Je suis un développeur web spécialisé dans la création (et parfois la conception) d'expériences numériques exceptionnelles. Actuellement, je me concentre sur la création de produits accessibles et centrés sur l'humain.",
    viewWork: "Voir Mon Travail",
    contactMe: "Me Contacter",
    scrollDown: "Défiler Vers le Bas",

    // About section
    about: "À Propos de Moi",
    aboutDescription: "Je suis un développeur web passionné avec plus de 2 ans d'expérience dans la création d'applications web modernes. Mon parcours dans le développement web a commencé par une fascination pour la construction d'expériences interactives, et a évolué vers la création d'applications professionnelles à haute performance.",
    skills: "Mes Compétences & Expertise",
    experience: "2+ Ans d'Expérience",
    fullStack: "Développement Full Stack",

    // Projects section
    projects: "Projets en Vedette",
    projectsDescription: "Voici quelques-uns de mes projets récents qui mettent en valeur mes compétences et mon expertise en développement web. Chaque projet représente des défis et des solutions uniques.",
    liveDemo: "Démo en Direct",
    viewCode: "Voir le Code",

    // Testimonials section
    testimonials: "Témoignages Clients",
    testimonialsDescription: "Ne vous fiez pas seulement à ma parole. Voici ce que mes clients disent de leur collaboration avec moi sur leurs projets.",

    // Contact section
    contact: "Entrer en Contact",
    contactDescription: "Je suis toujours intéressé par de nouveaux projets, opportunités et connexions. N'hésitez pas à me contacter si vous souhaitez collaborer ou simplement dire bonjour!",
    contactInformation: "Coordonnées",
    phone: "Téléphone",
    email: "Email",
    location: "Emplacement",
    phoneValue: "+216 54 258 313",
    emailValue: "boutrigafares1999@gmail.com",
    locationValue: "Tunis, Tunisie",
    connectWithMe: "Connectez-Vous Avec Moi",
    yourName: "Votre Nom",
    yourEmail: "Votre Email",
    subject: "Sujet",
    yourMessage: "Votre Message",
    sending: "Envoi en cours...",
    sendMessage: "Envoyer le Message",
    sendMeMessage: "Envoyez-moi un Message",
    messageSent: "Message envoyé!",
    messageSentDescription: "Merci de votre message. Je vous répondrai bientôt.",

    // Footer
    rights: "Tous droits réservés.",
    language: "Langue",
  },

  ar: {
    // Navbar
    home: "الرئيسية",
    aboutNav: "نبذة عني",
    projectsNav: "المشاريع",
    testimonialsNav: "آراء العملاء",
    contactNav: "تواصل معي",
    portfolio: "المعرض",
    resume: "السيرة الذاتية",
    // Hero section
    hello: "مرحبا، اسمي",
    name: "فارس بوطريڨة .",
    tagline: "أقوم ببناء تجارب رقمية استثنائية.",
    description: "أنا مطور ويب متخصص في بناء (وأحيانًا تصميم) تجارب رقمية استثنائية. حاليًا، أركز على إنشاء منتجات يمكن الوصول إليها وتتمحور حول الإنسان.",
    viewWork: "عرض أعمالي",
    contactMe: "اتصل بي",
    scrollDown: "مرر لأسفل",

    // About section
    about: "نبذة عني",
    aboutDescription: "أنا مطور ويب شغوف بخبرة تزيد عن 2 سنوات في إنشاء تطبيقات ويب حديثة. بدأت رحلتي في تطوير الويب بافتتان ببناء تجارب تفاعلية، وتطورت إلى إنشاء تطبيقات احترافية عالية الأداء.",
    skills: "مهاراتي وخبراتي",
    experience: "خبرة 2+ سنوات",
    fullStack: "تطوير الويب الشامل",

    // Projects section
    projects: "مشاريع مميزة",
    projectsDescription: "فيما يلي بعض مشاريعي الأخيرة التي تعرض مهاراتي وخبرتي في تطوير الويب. يمثل كل مشروع تحديات وحلول فريدة.",
    liveDemo: "عرض مباشر",
    viewCode: "عرض الكود",

    // Testimonials section
    testimonials: "آراء العملاء",
    testimonialsDescription: "لا تأخذ كلامي فقط. إليك ما يقوله عملائي عن العمل معي في مشاريعهم.",

    // Contact section
    contact: "تواصل معي",
    contactDescription: "أنا مهتم دائمًا بالاستماع إلى المشاريع والفرص والاتصالات الجديدة. لا تتردد في التواصل إذا كنت ترغب في التعاون أو مجرد إلقاء التحية!",
    contactInformation: "معلومات الاتصال!",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    phoneValue: "+21654258313",
    emailValue: "boutrigafares1999@gmail.com",
    locationValue: "تونس، تونس",
    connectWithMe: "تواصل معي",
    yourName: "اسمك",
    yourEmail: "بريدك الإلكتروني",
    subject: "الموضوع",
    yourMessage: "رسالتك",
    sending: "جاري الإرسال...",
    sendMessage: "إرسال الرسالة",
    sendMeMessage: "أرسل لي رسالة",
    messageSent: "تم إرسال الرسالة!",
    messageSentDescription: "شكرًا للتواصل. سأرد عليك قريبًا.",

    // Footer
    rights: "جميع الحقوق محفوظة.",
    language: "اللغة",
  },
};
