import { ArrowRight, Github, Mail, Linkedin, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const projects = [
    {
      title: "Distributed KV Store",
      description: "Built a high-performance distributed key-value store using Raft consensus algorithm, with transactional sharding and snapshotting.",
      stack: ["Go", "Raft", "REST"],
      impact: "Implemented two-phase lock (2PL) and two-phase commit (2PC) for atomic cross-shard transaction",
      github: "https://github.com/aziz-rangwala/distributed-kv",
      demo: "#",
      slug: "distributed-kv"
    },
    {
      title: "Easy Presentor",
      description: "AI-powered smart presentation platform for real-time speech-to-text and slide highlights using Kafka and BERT.",
      stack: ["Python", "Django", "Kafka", "PostgreSQL", "Kubernetes"],
      impact: "Enhanced presentor-audience engagement by 40%",
      github: "https://github.com/aziz-rangwala/ai-optimizer",
      demo: "#",
      slug: "ai-optimizer"
    },
    {
      title: "Scalable Cloud GitOps",
      description: "Built a cost-optimized, auto-scaling GitOps infrastructure with Terraform, Argo CD, and Kubernetes, improving resilience and response time.",
      stack: ["Terraform", "Kubernetes", "Grafana", "Prometheus", "AWS"],
      impact: "Improved resilience and cut incident response time by 40% through chaos testing and monitoring under 10x load",
      github: "https://github.com/aziz-rangwala/analytics-engine",
      demo: "#",
      slug: "analytics-engine"
    }
  ];

  const skills = {
    "Languages": ["Python", "C#", "Java", "TypeScript", "SQL", "Go"],
    "Frameworks & Tools": ["Flask", "Node.js", ".NET", "Kafka", "Selenium", "AWS Lambda", "Git", "Jira", "Spark"],
    "Infrastructure & DevOps": ["Docker", "Terraform", "Kubernetes", "Ansible", "Grafana", "Prometheus", "AWS", "Azure", "Linux"],
    "Databases": ["Snowflake", "PostgreSQL", "MongoDB", "Redis", "RDS", "S3", "Elasticsearch"]
  };

  const highlights = [
    "Led development of 15+ web scrapers",
    "Improved AI pipeline performance by 42%",
    "Managed and optimized a cloud data platform for a major client",
    "Built a distributed key value store"
  ];

  const experience = [
    {
      company: "Learning and Language Analytics Lab",
      position: "Student Researcher",
      duration: "Feb 2025 - Present",
      location: "Remote",
      description: "Working on scalable AI systems and real-time language processing.",
      achievements: [
        "Boosted inference accuracy by 18% through pipeline improvements",
        "Optimized response generation for low-latency performance"
      ],
      technologies: ["Python", "Flask", "PostgreSQL", "Redis", "AWS"]
    },
    {
      company: "Ria Money Transfer",
      position: "Software Engineer",
      duration: "Jun 2024 - Dec 2024",
      location: "Buena Park, CA",
      description: "Built scalable scraping infrastructure and backend systems for pricing-intelligence",
      achievements: [
        "Led development of 15+ Selenium scrapers, cutting manual effort by 80%",
        "Reverse-engineered 5+ APIs for reliable, anti-bot-resistant data collection",
        "Designed REST APIs and a parallel scraping system, reducing retrieval time by 60%"
      ],
      technologies: ["C#", ".NET", "MongoDB", "Selenium", "Git", "Jira"]
    },
    {
      company: "Quantiphi",
      position: "Framework Engineer",
      duration: "Jul 2021 - Aug 2023",
      location: "Mumbai, India",
      description: "Engineered cloud-based data pipelines, automated workflows, and CI/CD systems to support data-warehousing and analytics",
      achievements: [
        "Automated 50GB+ daily loads in Snowflake with JS/SQL scripts, improving efficiency by 30%",
        "Developed AWS Glue/Lambda ETL for medical data, tripling dashboard insight speed",
        "Automated QA and monitoring, cutting manual testing by 90% and accelerating defect resolution 16x"
      ],
      technologies: ["Python", "JavaScript", "SQL", "Snowflake", "AWS", "Azure DevOps"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aziz Rangwala
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-blue-600 font-medium">Home</a>
              <Link to="/projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/blog" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden">
              <ThemeToggle />
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
                Aziz Rangwala
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-700 dark:text-slate-300 mb-4 font-medium">
              Software Engineer
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Focused on building scalable systems, solving complex problems and optimizing performance at scale.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" asChild>
              <Link to="/projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800">
              Download Resume
            </Button>
          </div>

          {/* Current Focus */}
          <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
            <h3 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">🚀 Currently Building</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Chat application with an AI teammate that helps users complete tasks through natural conversations.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800 dark:text-slate-200">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <p className="text-slate-700 dark:text-slate-300 font-medium text-center">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Projects</h2>
          {/* <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-16 max-w-3xl mx-auto">
            A selection of projects showcasing my expertise in distributed systems, performance optimization, and infrastructure.
          </p> */}
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm font-medium text-green-600 dark:text-green-400 mb-4">✅ {project.impact}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                      <Link to={`/projects/${project.slug}`}>
                        <ArrowRight className="h-4 w-4 mr-2" />
                        Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-slate-300 dark:border-slate-600" asChild>
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Professional Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 text-center mb-16 max-w-3xl mx-auto">
            Building scalable systems and leading engineering teams across fast-growing tech companies.
          </p>
          
          <div className="space-y-8">
            {experience.map((job, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-slate-800 dark:text-slate-200 mb-1">
                        {job.position}
                      </CardTitle>
                      <div className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                        {job.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {job.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 dark:bg-slate-800/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-slate-200">Technical Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <Card key={category} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
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
          <h2 className="text-4xl font-bold mb-8 text-slate-800 dark:text-slate-200">Let's Build Something Amazing</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, technical challenges, or just geeking out about backend systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
              <Link to="/contact">
                <Mail className="h-5 w-5 mr-2" />
                Get In Touch
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://linkedin.com/in/aziz-rangwala" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/aziz-rangwala" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
          
          <div className="mt-12 text-slate-500 dark:text-slate-400">
            <p>📍 Based in Champaign, IL • Open to Hybrid | Remote | Onsite opportunities</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 dark:bg-slate-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Aziz Rangwala. Built with React, TypeScript, and lots of ☕</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
