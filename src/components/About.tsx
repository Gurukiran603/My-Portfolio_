import { Code2, Database, Brain, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end web applications with modern technologies and best practices."
    },
    {
      icon: Database,
      title: "Python Programming",
      description: "Proficient in Python for backend development, automation, and data processing."
    },
    {
      icon: Brain,
      title: "AI/ML Enthusiast",
      description: "Passionate about machine learning, neural networks, and artificial intelligence."
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Always eager to learn new technologies and adapt to changing industry trends."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate about creating innovative solutions
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold">
                Fresh Graduate with Big Dreams
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  As a recent graduate and aspiring software engineer, I bring fresh perspectives 
                  and cutting-edge knowledge to every project. My journey started with a curiosity 
                  about how technology can solve real-world problems.
                </p>
                <p>
                  I specialize in full-stack development with a strong foundation in Python, 
                  modern web technologies, and emerging AI/ML frameworks. My goal is to contribute 
                  to innovative projects while continuously learning and growing in the tech industry.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to 
                  open-source projects, or diving deep into the latest AI research papers.
                </p>
              </div>
            </div>

            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card p-6 rounded-2xl">
                <h4 className="text-lg font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Location</span>
                    <span>India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Experience</span>
                    <span>Fresh Graduate</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Focus</span>
                    <span>Full-Stack + PythonProgramming</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="text-green-400">Open to Work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card p-6 rounded-2xl hover:bg-primary/5 transition-colors group animate-fade-up"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;