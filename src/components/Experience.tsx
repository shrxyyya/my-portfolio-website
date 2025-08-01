import { GraduationCap, Briefcase, MapPin, Calendar, Github, ExternalLink } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      institution: "PES University",
      degree: "B.Tech in Computer Science Engineering",
      location: "Bengaluru, India",
      period: "2022 - 2026",
      details: [
        "Relevant Coursework: Data Structures & Algorithms, Machine Learning, Database Systems, Software Engineering, Computer Networks, Operating Systems, Cloud Computing, Compiler Design, OOPS",
        "CGPA: 8.04/10 (Upto Semester 6)"
      ]
    },
    {
      institution: "Oxford Senior Secondary School",
      degree: "Higher Secondary Education (XII)",
      location: "Bengaluru, India",
      period: "2020 - 2022",
      details: [
        "Physics, Chemistry, Mathematics, Biology",
        "Percentage: 95.2%"
      ]
    }
  ];

  const internships = [
    {
      company: "Centre for Healthcare Engineering (cHEAL)",
      position: "Research Intern",
      location: "Bengaluru, India",
      period: "Jun 2025 - Jul 2025",
      details: [
        "Dyslexia detection using eye-tracking data. Augmented dataset by generating 140 synthetic subjects using controlled noise injection, preserving key spatial-temporal patterns.",
        "Trained a logistic regression model on the expanded dataset, achieving 81% accuracy using fixation-based features, while avoiding overfitting."
      ],
      githubUrl: "https://github.com/shrxyyya/dyslexia-detection-eye-movements"
    },
    {
      company: "Fabrik",
      position: "Project Intern",
      location: "Bengaluru, India",
      period: "Jun 2024 - Aug 2024",
      details: [
        "Worked with React-Three-Fibre and Three.js to import, render, and customize 3D models and text. Used Firebase for storage.",
        "Worked as part of a 3-member group to develop a website for custom 3D animations, including merging animations, changing mesh materials, adding lighting, setting up multiple camera perspectives, and post-processing."
      ],
      liveUrl: "https://xenomorphs.vercel.app/"
    }
  ];

  const achievements = [
    "🌟 GirlScript Summer of Code 2025 Contributor",
    "📜 Google Gen AI Academy Certification",
    "👩‍💻 Unity 3D Essentials Pathway"
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional experiences that have shaped my skills and expertise
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="text-muted-foreground text-sm flex items-start"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Briefcase className="w-6 h-6 text-primary mr-3" />
              Professional Experience
            </h3>
            
            <div className="space-y-6">
              {internships.map((job, index) => (
                <div 
                  key={index}
                  className="relative bg-card border border-border rounded-xl p-6 card-hover"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        {job.position}
                      </h4>
                      <p className="text-primary font-medium mb-2">
                        {job.company}
                      </p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Calendar className="w-4 h-4 mr-1" />
                        {job.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.details.map((detail, detailIndex) => (
                      <li 
                        key={detailIndex}
                        className="text-muted-foreground text-sm flex items-start"
                      >
                        <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Project Links */}
                  <div className="flex space-x-4 mt-4">
                    {job.githubUrl && (
                      <a
                        href={job.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {job.liveUrl && (
                      <a
                        href={job.liveUrl}
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
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Achievements & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center card-hover"
              >
                <p className="text-foreground font-medium">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;