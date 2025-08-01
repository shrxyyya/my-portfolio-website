import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/shrxyyya",
      ariaLabel: "Visit Shreya's GitHub profile"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/shreya-mittal3",
      ariaLabel: "Visit Shreya's LinkedIn profile"
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:shreyamittal1005@gmail.com",
      ariaLabel: "Send an email to Shreya"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom px-4 py-7">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand & Description - Half width */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center font-bold text-primary-foreground">
                SM
              </div>
              <h3 className="text-xl font-bold text-foreground">Shreya Mittal</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Aspiring developer passionate about creating innovative digital solutions 
              through AI, web development, and 3D technologies.
            </p>
          </div>

          {/* Quick Links & Connect - Nested Grid for Other Half */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Let's Connect</h4>
              <p className="text-muted-foreground">
                Follow me on social media or drop me a message!
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target={social.name !== "Email" ? "_blank" : undefined}
                    rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={social.ariaLabel}
                    className="group w-10 h-10 bg-secondary border border-border rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <p>&copy; {currentYear} Shreya Mittal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;