import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Server, 
  Smartphone,
  GitBranch,
  Cloud
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: ["React", "HTML/CSS", "Tailwind CSS", "JavaScript", "Next.js"]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Python", "Node.js", "FastAPI", "Django", "REST APIs", "Express.js"]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker(basics)", "Firebase"]
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["Machine Learning", "TensorFlow", "PyTorch", "Pandas/NumPy", "Data Analysis", "Scikit-learn"]
    }
  ];

  const tools = [
    { name: "Git & GitHub", icon: GitBranch },
    { name: "VS Code", icon: Code },
    { name: "Postman", icon: Smartphone },
    { name: "AWS/GCP", icon: Cloud },  
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="glass-card p-8 rounded-2xl animate-fade-up"
                  style={{ animationDelay: `${categoryIndex * 0.2}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium hover:bg-primary/10 transition-colors animate-fade-up"
                        style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tools & Technologies */}
          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold text-center mb-8">
              Tools & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {tools.map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="glass-card p-6 rounded-xl hover:bg-primary/10 transition-all duration-300 group text-center"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <Icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:text-accent transition-colors" />
                    <p className="font-medium">{tool.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Learning Journey */}
          <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '1.2s' }}>
            <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground">
                As a fresh graduate, I'm committed to continuous learning and staying updated 
                with the latest technologies. Currently exploring advanced AI/ML concepts, 
                cloud architecture patterns, and modern DevOps practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;