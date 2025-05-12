import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ProgressIndicator from '@/components/ProgressIndicator';

const Index = () => {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = 'Fares Boutriga | Web Developer Portfolio';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web developer portfolio showcasing projects, skills, and expertise in creating modern web applications.');
    }

    // Add canonical tag
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://www.faresboutriga.com/'; // Replace with your actual canonical URL
      document.head.appendChild(link);
    }

    // Analytics tracking could be initialized here
    console.log('Portfolio page loaded - analytics tracking');
  }, []);

  return (
    <div className="min-h-screen">
      <ProgressIndicator />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
