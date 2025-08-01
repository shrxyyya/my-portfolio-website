import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90, icon: "🐍" },
        { name: "C/C++", level: 85, icon: "⚡" },
        { name: "Java", level: 75, icon: "☕" },
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 88, icon: "🟨" },
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Three.js", level: 80, icon: "🎮" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Flask", level: 85, icon: "🌶️" },
        { name: "MongoDB", level: 80, icon: "🍃" },
        { name: "MySQL", level: 75, icon: "🐬" },
        { name: "Apache Spark", level: 70, icon: "⚡" },
        { name: "Apache Kafka", level: 68, icon: "📡" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85, icon: "🐳" },
        { name: "Kubernetes", level: 80, icon: "⚓" },
        { name: "GitHub", level: 95, icon: "🐙" },
        { name: "Git", level: 90, icon: "📝" },
        { name: "Linux", level: 85, icon: "🐧" },
      ]
    },
    {
      title: "AI & Data Science",
      skills: [
        { name: "Machine Learning", level: 85, icon: "🤖" },
        { name: "Gradio", level: 80, icon: "📊" },
        { name: "Pinecone", level: 75, icon: "🌲" },
        { name: "Firebase", level: 75, icon: "🔥" },
        { name: "RAG Systems", level: 70, icon: "🔍" },
        { name: "Agentic Systems", level: 70, icon: "🕵🏻" },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency across various technologies
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="relative"
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-lg">{skill.icon}</span>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-700 ease-out"
                        style={{ 
                          width: hoveredSkill === `${categoryIndex}-${skillIndex}` ? `${skill.level}%` : '0%' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 text-center">
          <h4 className="text-lg font-semibold text-foreground mb-4">Additional Skills & Interests</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "WebXR Development", "System Design", "Cloud Computing", "Agile Methodology", "Open Source", "Technical Writing"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm hover:bg-primary/20 transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;