import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Github, ExternalLink, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStack, setSelectedStack] = useState<string[]>([]);

  const projects = [
    {
      title: "Distributed KV Store",
      description: "Built a high-performance distributed key-value store using Raft consensus algorithm, achieving 99.9% uptime across 5-node clusters.",
      stack: ["Go", "Raft", "PostgreSQL", "Docker"],
      category: "Systems",
      impact: "Reduced data retrieval latency by 65%",
      github: "https://github.com/username/distributed-kv",
      demo: "#",
      slug: "distributed-kv",
      year: "2024"
    },
    {
      title: "AI Pipeline Optimizer",
      description: "Optimized machine learning inference pipeline for real-time predictions, implementing efficient batching and caching strategies.",
      stack: ["Python", "TensorFlow", "Redis", "Kubernetes"],
      category: "AI",
      impact: "Improved throughput by 3x",
      github: "https://github.com/username/ai-optimizer",
      demo: "#",
      slug: "ai-optimizer",
      year: "2024"
    },
    {
      title: "Real-time Analytics Engine",
      description: "Designed and implemented a real-time data processing system handling 1M+ events per second with sub-100ms latency.",
      stack: ["Rust", "Apache Kafka", "ClickHouse", "gRPC"],
      category: "Systems",
      impact: "Reduced API latency from 300ms → 80ms",
      github: "https://github.com/username/analytics-engine",
      demo: "#",
      slug: "analytics-engine",
      year: "2023"
    },
    {
      title: "Microservices Orchestrator",
      description: "Built a container orchestration platform with auto-scaling, service discovery, and health monitoring capabilities.",
      stack: ["Go", "Docker", "Kubernetes", "etcd"],
      category: "Systems",
      impact: "Reduced deployment time by 80%",
      github: "https://github.com/username/microservices-orchestrator",
      demo: "#",
      slug: "microservices-orchestrator",
      year: "2023"
    },
    {
      title: "Neural Network Accelerator",
      description: "Developed CUDA kernels for accelerating transformer model training with custom memory management and optimization techniques.",
      stack: ["CUDA", "C++", "Python", "PyTorch"],
      category: "AI",
      impact: "Achieved 4x speedup in training time",
      github: "https://github.com/username/neural-accelerator",
      demo: "#",
      slug: "neural-accelerator",
      year: "2023"
    },
    {
      title: "Blockchain Consensus Engine",
      description: "Implemented a novel consensus mechanism combining proof-of-stake with practical Byzantine fault tolerance for enterprise applications.",
      stack: ["Go", "Cryptography", "P2P", "gRPC"],
      category: "Systems",
      impact: "Achieved 10k+ TPS with finality",
      github: "https://github.com/username/blockchain-consensus",
      demo: "#",
      slug: "blockchain-consensus",
      year: "2022"
    }
  ];

  // Get all unique stack technologies and categories
  const allStacks = Array.from(new Set(projects.flatMap(p => p.stack)));
  const allCategories = Array.from(new Set(projects.map(p => p.category)));

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesStack = selectedStack.length === 0 || 
                        selectedStack.some(stack => project.stack.includes(stack) || project.category === stack);
    
    return matchesSearch && matchesStack;
  });

  const toggleStackFilter = (stack: string) => {
    setSelectedStack(prev => 
      prev.includes(stack) 
        ? prev.filter(s => s !== stack)
        : [...prev, stack]
    );
  };

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
              <span className="text-blue-600 font-medium">Projects</span>
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

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A collection of projects showcasing expertise in distributed systems, AI infrastructure, and performance optimization.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search projects by name, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700"
              />
            </div>

            {/* Stack Filters */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="h-4 w-4 text-slate-600 dark:text-slate-400" />
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Filter by Technology/Category:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {/* Categories */}
                {allCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedStack.includes(category) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleStackFilter(category)}
                    className={selectedStack.includes(category) 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                      : "border-slate-300 dark:border-slate-600"
                    }
                  >
                    {category}
                  </Button>
                ))}
                
                {/* Technologies */}
                {allStacks.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedStack.includes(tech) ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleStackFilter(tech)}
                    className={selectedStack.includes(tech) 
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                      : "border-slate-300 dark:border-slate-600"
                    }
                  >
                    {tech}
                  </Button>
                ))}
              </div>
              
              {selectedStack.length > 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedStack([])}
                  className="mt-2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  Clear filters
                </Button>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-slate-300 dark:border-slate-600">
                      {project.year}
                    </Badge>
                    <Badge className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-200 border-0">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link to={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
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
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No projects found matching your criteria. Try adjusting your search or filters.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
