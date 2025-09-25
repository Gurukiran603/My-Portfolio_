import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/gurukiran603",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/csgurukiran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:kiranguru603@gmail.com",
      label: "Email"
    }
  ];

  return (
    <footer className="py-12 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gradient">Portfolio</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fresh Software Engineer passionate about building innovative solutions 
                with cutting-edge technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold">Quick Links</h4>
              <div className="flex flex-col space-y-2">
                {["About", "Skills", "Projects", "Contact"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold">Get In Touch</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Open to opportunities</p>
                <p>Available for freelance work</p>
                <p>Let's build something amazing together!</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-colors group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-primary/20">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © 2025 Made with ❤️
              by GURUKIRAN C S
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;