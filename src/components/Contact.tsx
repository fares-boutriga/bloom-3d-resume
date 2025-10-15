
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import SocialLinks from './SocialLinks';
import { useTranslation } from '@/hooks/useTranslation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch("https://formspree.io/f/xldpapyl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      toast({
        title: t('messageSent'),
        description: t('messageSentDescription'),
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      toast({
        title: t('error'),
        description: t('somethingWentWrong') ,
        variant: 'destructive',
      });
    }
  } catch (error) {
    toast({
      title:  'error' ,
      description:  t('somethingWentWrong') ,
      variant: 'destructive',
    });
  }

  setIsSubmitting(false);
};

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-accent" />,
      label: t('phone'),
      value: t('phoneValue'),
      application: 'tel',
    },
    {
      icon: <Mail className="h-5 w-5 text-accent" />,
      label: 'Email',
      value: t('emailValue'),
      application: 'mailto',

    },
    {
      icon: <MapPin className="h-5 w-5 text-accent" />,
      label: t('location'),
      value: t('locationValue'),
      application: 'https://www.google.com/maps/place/Tunis,+Tunisia/@33.8869179,9.5374992,10z/data=!3m1!4b1!4m6!3m5!1s0x12fd2a7f8c8e5b7d:0x3f8c4e2f8c4e2f8c!8m2!3d33.8869179!4d9.5374992!16zL20vMDJtZzQ',
    },
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
    <section id="contact" className="section-padding">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient">{t('contact')}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            {t('contactInformation')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-display font-semibold mb-6">{t('connectWithMe')}</h3>
            
            <div className="glass-panel rounded-xl p-6 mb-6">
              <ul className="space-y-6">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                     <a href= {`${item.application}:${item.value}`}> {item.icon}</a>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm text-foreground/70">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">{t('connectWithMe')}</h4>
              <SocialLinks />
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-display font-semibold mb-6">{t('sendMeMessage')}</h3>
            
            <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-6">
              <div className="grid gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('yourName')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-foreground/10 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('yourEmail')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-foreground/10 focus:border-accent"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder={t('subject')}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-background/50 border-foreground/10 focus:border-accent"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('yourMessage')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] bg-background/50 border-foreground/10 focus:border-accent"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />
                      {t('sending')}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={16} />
                      {t('sendMessage')}
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
