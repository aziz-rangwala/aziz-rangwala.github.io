import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const ProjectDetail = () => {
  const { slug } = useParams();
  
  // Mock project data - in a real app this would come from an API or database
  const projectData = {
    "distributed-kv": {
      title: "Distributed KV Store",
      description: "High-performance distributed key-value store using Raft consensus algorithm",
      fullDescription: "Built a production-ready distributed key-value store from scratch, implementing the Raft consensus algorithm to ensure data consistency across multiple nodes. The system handles concurrent reads/writes while maintaining ACID properties and achieving 99.9% uptime across 5-node clusters.",
      stack: ["Go", "Raft", "PostgreSQL", "Docker", "gRPC"],
      year: "2024",
      problem: "Traditional databases couldn't handle our distributed microservices architecture requirements for high availability and partition tolerance while maintaining consistency.",
      solution: "Implemented a custom distributed KV store using Raft consensus algorithm with leader election, log replication, and automatic failover mechanisms.",
      challenges: [
        "Handling split-brain scenarios during network partitions",
        "Optimizing log compaction for memory efficiency",
        "Implementing efficient leader election timeouts",
        "Balancing consistency vs availability trade-offs"
      ],
      outcomes: [
        "Reduced data retrieval latency by 65%",
        "Achieved 99.9% uptime across production clusters",
        "Scaled to handle 10,000+ concurrent connections",
        "Zero data loss during planned/unplanned failovers"
      ],
      github: "https://github.com/username/distributed-kv",
      demo: "#"
    },
    "ai-optimizer": {
      title: "AI Pipeline Optimizer",
      description: "Optimized machine learning inference pipeline for real-time predictions",
      fullDescription: "Designed and implemented a high-performance ML inference pipeline that processes real-time data streams with sub-100ms latency. The system uses intelligent batching, caching strategies, and model optimization techniques to achieve 3x throughput improvement.",
      stack: ["Python", "TensorFlow", "Redis", "Kubernetes", "Apache Kafka"],
      year: "2024",
      problem: "Existing ML inference pipeline couldn't handle real-time traffic spikes, causing degraded user experience and timeouts.",
      solution: "Built an optimized inference engine with dynamic batching, model caching, and horizontal scaling capabilities.",
      challenges: [
        "Balancing batch size vs latency requirements",
        "Memory management for large transformer models",
        "Cold start optimization for auto-scaling",
        "Model versioning and A/B testing infrastructure"
      ],
      outcomes: [
        "Improved throughput by 300%",
        "Reduced P95 latency from 500ms to 80ms",
        "Decreased infrastructure costs by 40%",
        "Enabled real-time personalization for 1M+ users"
      ],
      github: "https://github.com/username/ai-optimizer",
      demo: "#"
    }
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aziz Rangwala
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/projects" className="text-blue-600 font-medium">Projects</Link>
              <Link to="/blog" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Blog</Link>
              <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">About</Link>
              <Link to="/contact" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</Link>
              <ThemeToggle />
            </div>
            <div className="md:hidden flex items-center gap-2">
              <Link to="/projects">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Projects
                </Button>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {project.year}
              </Badge>
              <div className="flex gap-2">
                {project.stack.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex gap-4">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </a>
              </Button>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 dark:text-red-400">🔧 Problem</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{project.problem}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-green-600 dark:text-green-400">💡 Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 dark:text-slate-300">{project.solution}</p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Challenges */}
          <Card className="mb-12 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-orange-600 dark:text-orange-400">⚡ Technical Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="text-orange-500 font-bold mt-1">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Outcomes */}
          <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-xl text-green-600 dark:text-green-400">✅ Outcomes & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <span className="text-green-500 font-bold mt-1">✓</span>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{outcome}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
