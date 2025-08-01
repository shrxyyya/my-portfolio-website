import { Code, Brain, Globe, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies and frameworks"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & Machine Learning",
      description: "Passionate about intelligent systems and data science"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "3D Visualization",
      description: "Creating immersive experiences with WebXR and Three.js"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    }
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">B.Tech Computer Science student</span> at PES University, Bengaluru, 
              with a strong foundation in programming and a keen interest in AI, Machine Learning, web development, and 3D visualization.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I thrive on solving real-world problems through innovative projects and enjoy exploring the intersection of 
              <span className="text-primary font-semibold"> technology and creativity</span>. My goal is to create digital solutions 
              that make a meaningful impact.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              In my free time, I enjoy exploring new tech trends and contributing to open-source communities. 
              I believe in continuous learning and staying updated with the rapidly evolving tech landscape.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium">
                📍 Based in Bengaluru, India
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-background p-6 rounded-xl border border-border card-hover"
              >
                <div className="text-primary mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;