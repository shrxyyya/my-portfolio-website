import { ExternalLink, Github, Play } from 'lucide-react';
import legalAnalysisPreview from '@/assets/legal-contract.jpg';
import urlShortenerPreview from '@/assets/url-shortener.jpg';
import labversePreview from '@/assets/labverse.jpg';
import bakezyPreview from '@/assets/bakezy.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Legal Contract Analysis System",
      description: "An AI-powered system using RAG (Retrieval-Augmented Generation) architecture to analyze legal contracts. Built with Gradio for the interface and Pinecone for vector storage, enabling intelligent document processing and analysis.",
      image: legalAnalysisPreview,
      technologies: ["Python", "RAG", "Gradio", "Pinecone", "NLP"],
      githubUrl: "https://github.com/shrxyyya/Legal-Contract-Analysis-RAG",
      liveUrl: null,
      featured: true
    },
    {
      title: "Load-Balanced URL Shortener",
      description: "A scalable URL shortening service built with Flask and deployed on Kubernetes. Features automatic load balancing, high availability, and efficient request distribution for handling thousands of concurrent users.",
      image: urlShortenerPreview,
      technologies: ["Flask", "Kubernetes", "Docker", "Python", "Redis"],
      githubUrl: "https://github.com/shrxyyya/Load-balanced-URL-Shortener",
      liveUrl: null,
      featured: true
    },
    {
      title: "LabVerse - 3D Laboratory",
      description: "An immersive 3D virtual laboratory built with Three.js and WebXR. Provides realistic sound experience and cross-platform VR support.",
      image: labversePreview,
      technologies: ["Three.js", "WebXR", "JavaScript", "GLSL", "WebGL"],
      githubUrl: "https://github.com/shrxyyya/LabVerse",
      liveUrl: "https://lab-verse-ten.vercel.app/",
      featured: true
    },
    {
      title: "Bakezy - Recipe Platform",
      description: "A full-stack recipe sharing platform built with the MERN stack. Features user authentication, recipe management, and social interactions",
      image: bakezyPreview,
      technologies: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      githubUrl: "https://github.com/shrxyyya/wt_project",
      liveUrl: "https://bakezy.vercel.app/",
      featured: true
    }
  ];

  return (
    <section id="projects" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development, AI, and 3D technologies
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-background border border-border rounded-xl overflow-hidden card-hover ${
                project.featured ? 'lg:grid lg:grid-cols-2 lg:gap-8' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Project Links Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        aria-label={`View ${project.title} source code`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <Play className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-secondary border border-border rounded-full text-foreground text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/shrxyyya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center space-x-2"
          >
            <span>View More Projects</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;