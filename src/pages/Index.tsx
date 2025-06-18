
import { ArrowRight, Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const projects = [
    {
      title: "Distributed KV Store",
      description: "Built a high-performance distributed key-value store using Raft consensus algorithm, achieving 99.9% uptime across 5-node clusters.",
      stack: ["Go", "Raft", "PostgreSQL", "Docker"],
      impact: "Reduced data retrieval latency by 65%",
      github: "https://github.com/username/distributed-kv",
      demo: "#"
    },
    {
      title: "AI Pipeline Optimizer",
      description: "Optimized machine learning inference pipeline for real-time predictions, implementing efficient batching and caching strategies.",
      stack: ["Python", "TensorFlow", "Redis", "Kubernetes"],
      impact: "Improved throughput by 3x",
      github: "https://github.com/username/ai-optimizer",
      demo: "#"
    },
    {
      title: "Real-time Analytics Engine",
      description: "Designed and implemented a real-time data processing system handling 1M+ events per second with sub-100ms latency.",
      stack: ["Rust", "Apache Kafka", "ClickHouse", "gRPC"],
      impact: "Reduced API latency from 300ms → 80ms",
      github: "https://github.com/username/analytics-engine",
      demo: "#"
    }
  ];

  const skills = {
    "Languages": ["Go", "Rust", "Python", "TypeScript", "C++"],
    "Systems": ["Docker", "Kubernetes", "PostgreSQL", "Redis", "Apache Kafka"],
    "Cloud": ["AWS", "GCP", "Terraform", "Monitoring & Observability"],
    "Specialties": ["Distributed Systems", "Performance Optimization", "AI/ML Infrastructure"]
  };

  const highlights = [
    "Built distributed KV store using Raft consensus algorithm",
    "Improved AI pipeline performance by 300%",
    "Reduced API latency from 300ms → 80ms",
    "Led migration of monolith to microservices (15+ services)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex Chen
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#projects" className="text-slate-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#skills" className="text-slate-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Alex Chen
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 mb-4 font-medium">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Focused on building scalable distributed systems and AI infrastructure. 
              I love solving complex problems and optimizing performance at scale.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 hover:bg-slate-50">
              Download Resume
            </Button>
          </div>

          {/* Current Focus */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-700 mb-3">🚀 Currently Building</h3>
            <p className="text-slate-600">
              Exploring distributed consensus algorithms and building a next-gen observability platform 
              for microservices using eBPF and OpenTelemetry.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Impact Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white/80 border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <p className="text-slate-700 font-medium text-center">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800">Featured Projects</h2>
          <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
            A selection of projects showcasing my expertise in distributed systems, performance optimization, and infrastructure.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/80 border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-green-600 mb-4">✅ {project.impact}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-white/80 border-slate-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-slate-800">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, technical challenges, or just geeking out about distributed systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <a href="mailto:alex.chen@email.com">
                <Mail className="h-5 w-5 mr-2" />
                Send Email
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          
          <div className="mt-12 text-slate-500">
            <p>📍 Based in San Francisco, CA • Open to remote opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Alex Chen. Built with React, TypeScript, and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
