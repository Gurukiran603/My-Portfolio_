import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/WhatsApp Image 2025-09-24 at 01.53.20_47f2c7d8.jpg";
import heroBg from "@/assets/hero-bg.png";
import resumePdf from "@/assets/Gurukiran_FullStack_Resume_ATS (1).pdf";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 hero-glow rounded-full animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 hero-glow rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/3 w-32 h-32 hero-glow rounded-full animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hi, I'm 
                <span className="block text-gradient">
                  GURUKIRAN C S
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
              Full-Stack Developer | MERN Stack & Python | ML & AI Enthusiast | Android App Developer (In Progress) | 1x 🏆 Hackathon Winner | Passionate About Building Tech Solutions              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-3">
              {["Full-Stack", "Python", "AI/ML", "React", "Node.js"].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 glass-card rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-opacity font-semibold"
              >
                <a href="https://github.com/Gurukiran603" target="_blank" rel="noreferrer">View My Work</a>
              </Button>
              <a href={resumePdf} download>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/20 hover:bg-primary/10"
                >
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/gurukiran603", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/csgurukiran?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
                { icon: Mail, href: "mailto:kiranguru603@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-colors group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-30 animate-pulse-slow" />
              <img
                src={profileImage}
                alt="Profile"
                className="relative z-10 w-80 h-80 rounded-full object-cover object-[50%_35%] border-4 border-primary/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;