
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300",
      quote: "Working with John was an absolute pleasure. He delivered our project ahead of schedule and went above and beyond to ensure all our requirements were met. His attention to detail and technical expertise is outstanding.",
      stars: 5,
    },
    {
      name: "Michael Reynolds",
      role: "Marketing Director at GrowthBrand",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
      quote: "John transformed our outdated website into a modern, responsive platform that has significantly increased our conversion rates. His understanding of UX principles and technical implementation is impressive.",
      stars: 5,
    },
    {
      name: "Emily Chen",
      role: "Founder of DesignHub",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300",
      quote: "We hired John to develop our e-commerce platform, and the results exceeded our expectations. The site is fast, secure, and our customers love the shopping experience. I highly recommend his services!",
      stars: 4,
    },
  ];

  // Autoplay functionality
  useEffect(() => {
    if (autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [autoplay, testimonials.length]);

  // Pause autoplay on hover
  const pauseAutoplay = () => setAutoplay(false);
  const resumeAutoplay = () => setAutoplay(true);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.3 } }
  };

  return (
    <section id="testimonials" className="section-padding bg-secondary/10">
      <div className="container">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient">{t('testimonials')}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
          {t('testimonialsDescription')}
          </p>
        </motion.div>

        <div 
          className="max-w-4xl mx-auto" 
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
        >
          <div className="relative min-h-[300px] md:min-h-[250px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={testimonialVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="glass-panel rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-accent/20">
                      <img
                        src={testimonials[activeIndex].image}
                        alt={testimonials[activeIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex mb-2">
                      {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                        <Star key={i} size={18} className="fill-accent text-accent" />
                      ))}
                      {[...Array(5 - testimonials[activeIndex].stars)].map((_, i) => (
                        <Star key={i + testimonials[activeIndex].stars} size={18} className="text-accent/30" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg italic mb-4">
                      "{testimonials[activeIndex].quote}"
                    </blockquote>
                    
                    <div>
                      <p className="font-semibold">{testimonials[activeIndex].name}</p>
                      <p className="text-foreground/70 text-sm">{testimonials[activeIndex].role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-accent scale-125' : 'bg-foreground/30 hover:bg-foreground/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-6 gap-4">
            <Button 
              size="icon" 
              variant="outline" 
              onClick={goToPrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="outline" 
              onClick={goToNext}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
