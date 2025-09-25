import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Database, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "TRACE-X-SPORTSVISION PRO",
      description: "SportsVision Pro – TRACE-X is a full-stack AI web app that detects players, tracks ball movement, and predicts trajectories in real time. Built with FastAPI, React, and YOLOv8, it delivers accurate sports video insights with a modern, user-friendly interface.",
      tags: ["React", "Python", "TensorFlow", "MongoDB"],
      icon: Brain,
      gradient: "from-purple-500 to-pink-500",
      repo: "https://github.com/Gurukiran603/TRACE-X-SportsVisionPro"
    },
    {
      title: "E-Commerce Full-Stack Platform",
      description: "Complete e-commerce solution with user authentication, payment integration, and admin dashboard. Features real-time inventory management and analytics.",
      tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
      icon: Database,
      gradient: "from-blue-500 to-cyan-500",
      status: "GitHub",
      repo: "https://github.com/gurukiran603"
    },
    {
      title: "House price prediction using ML",
      description: "WA machine learning project that predicts house prices using regression models with feature engineering on the Kaggle House Prices dataset.",
      tags: ["Python", "Pandas", "Python", "NumPy",  "Scikit-learn"],
      icon: Code,
      gradient: "from-green-500 to-teal-500",
      status: "Live Demo",
      repo: "https://github.com/Gurukiran603/House_Price_Prediction-using-ML"
    },
    {
      title: "Detection of phishing websites using ML",
      description: "AI-powered phishing website detector that analyzes URLs, page content and visual cues to flag malicious sites in real-time.Interactive dashboard for analyzing large datasets with custom charts, filters, and real-time updates. Built for business intelligence use cases.",
      tags: ["Python", "Pandas", "Plotly", "Streamlit","MoveNetThunder"],
      icon: Database,
      gradient: "from-orange-500 to-red-500",
      status: "GitHub",
      repo: "https://github.com/gurukiran603"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my technical skills through real-world applications
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="glass-card p-8 rounded-2xl hover:bg-primary/5 transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 hover:bg-primary/10"
                    >
                      <a href={project.repo} target="_blank" rel="noreferrer">
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {project.status}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="glass-card p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">
                Want to see more projects?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm constantly working on new projects and contributing to open source. 
                Check out my GitHub for more repositories and ongoing work.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <a href="https://github.com/gurukiran603?tab=repositories" target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;