import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Falling stars background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-primary to-accent rounded-full animate-falling-star opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-dark-purple p-1 bg-gradient-to-br from-primary to-accent" style={{ '--dark-purple': 'hsl(258, 80%, 20%)' } as React.CSSProperties}>
                <img 
                  src={profilePhoto}
                  alt="Shreya Mittal profile photo" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="absolute inset-0 rounded-full glow-effect"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            <span className="gradient-text text-5xl md:text-7xl">Hello! I'm Shreya Mittal</span>
            <br />
            <span className="text-foreground text-xl md:text-2xl font-large">Aspiring Developer & Innovator</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Building efficient digital solutions with a passion for technology and design.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-10 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://github.com/shrxyyya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              aria-label="GitHub profile"
            >
              <Github className="w-6 h-6" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/shreya-mittal3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="w-6 h-6" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="public/Shreya_Mittal_resume.pdf"
              download
              className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 hover:scale-105"
              aria-label="Download resume"
            >
              <Download className="w-6 h-6" />
              <span className="hidden sm:inline">Resume</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToContact}
            className="btn-primary inline-flex items-center space-x-2 animate-slide-up"
            style={{ animationDelay: '0.6s' }}
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;