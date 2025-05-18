
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Eye, Github } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useTranslation } from '@/hooks/useTranslation';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      codeUrl: "#"
    },
    // {
    //   title: "DevQuiz",
    //   description: "A quiz game application built with HTML, CSS, and JavaScript. Features multiple-choice questions, score tracking, and a timer. Created for student ",
    //   image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   liveUrl: "https://fares-boutriga.github.io/DevQuiz/",
    //   codeUrl: "https://github.com/fares-boutriga/DevQuiz.git"
    // },
    {
      title: "Portfolio Website",
      description: "A stunning portfolio website with 3D elements using Three.js. Features smooth animations, responsive design, and modern UI.",
      image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=2000",
      technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A comprehensive task management application with real-time updates, user collaboration, and analytics dashboards.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=2000",
      technologies: ["Next.js", "Firebase", "TypeScript", "ChartJS"],
      liveUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "A social media analytics dashboard allowing users to track and visualize engagement across multiple platforms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
      technologies: ["React", "Redux", "Node.js", "Express", "D3.js"],
      liveUrl: "#",
      codeUrl: "#"
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="text-gradient">{t('projects')}</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
            {t('projectsDescription')}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative rounded-xl overflow-hidden"
              variants={fadeInUp}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="glass-panel h-full">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                  <p className="text-foreground/70 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="bg-secondary/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button size="sm" variant="default" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Eye size={16} />
                        <span>{t('liveDemo')}</span>
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" className="border-gradient" asChild>
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Code size={16} />
                        <span>{t('viewCode')}</span>
                      </a>
                    </Button>
                  </div>
                </div>

                {hoveredIndex === index && (
                  <motion.div
                    className="absolute top-3 right-3"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-background/70 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
