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
      "title": "Distributed KV Store",
      "description": "Built a fault-tolerant key-value store using Raft with etcd-style REST APIs, sharding, and BoltDB-based snapshotting.",
      "stack": ["Go", "Raft", "BoltDB"],
      "category": ["Systems","Backend"],
      "impact": "Enabled atomic cross-shard transactions and improved fault tolerance through 2PC and 2PL.",
      "github": "https://github.com/username/distributed-kv-store",
      "demo": "#",
      "slug": "distributed-kv",
      "year": "2024"
    },
    {
      "title": "Easy Presentor",
      "description": "AI-powered platform enhancing presenter-audience engagement with real-time speech-to-text and intelligent slide highlights.",
      "stack": ["Python", "Django", "Kafka", "PostgreSQL", "Docker", "Kubernetes", "BERT"],
      "category": ["AI","Systems","Backend", "Data Engineering"],
      "impact": "Reduced latency to 400ms and improved comprehension by 40%; ensured 99.9% uptime with Kubernetes autoscaling.",
      "github": "https://github.com/username/Easy-Presentor",
      "demo": "#",
      "slug": "easy-presentor",
      "year": "2024"
    },    
    {
      "title": "Scalable Cloud GitOps",
      "description": "Optimized cloud infrastructure for cost and uptime using GitOps and autoscaling strategies.",
      "stack": ["Docker","Terraform", "Kubernetes", "Prometheus", "Grafana", "AWS", "Argo CD", "Chaos Mesh"],
      "category": ["DevOps","Cloud", "Infra"],
      "impact": "Improved resilience and reduced incident response time by 40% under 10x load.",
      "github": "https://github.com/username/scalable-cloud-gitops",
      "demo": "#",
      "slug": "scalable-cloud-gitops",
      "year": "2024"
    },
    {
      "title": "RAG-powered PDF Chat Application",
      "description": "Built a retrieval-augmented app to chat with PDFs, enabling context-aware conversations over documents.",
      "stack": ["Python", "LangChain", "Streamlit", "LLM"],
      "category": ["AI"],
      "impact": "Reduced manual analysis time by 60%.",
      "github": "https://github.com/username/pdf-chat-app",
      "demo": "#",
      "slug": "pdf-chat-app",
      "year": "2024"
    },
    {
      "title": "OneClick",
      "description": "One-click content publishing tool with AI-generated captions, hashtags, and visuals for social platforms.",
      "stack": ["Next.js", "GraphQL", "OpenAI"],
      "category": ["AI","Productivity","Backend"],
      "impact": "Reduced content creation time by 5x; achieved <400ms latency for bulk posting.",
      "github": "https://github.com/username/oneclick",
      "demo": "#",
      "slug": "oneclick",
      "year": "2024"
    },
    {
      "title": "Medical Supply Chain",
      "description": "Blockchain-based supply chain system for tamper-proof drug traceability.",
      "stack": ["Node.js", "Express", "PostgreSQL", "HyperLedger Fabric", "Docker", "Redis"],
      "category": ["Blockchain","Systems","Backend"],
      "impact": "Cut API latency by 3x and ensured real-time traceability.",
      "github": "https://github.com/username/medical-supply-chain",
      "demo": "#",
      "slug": "medical-supply-chain",
      "year": "2024"
    },
    {
      "title": "Waste Collection Assistor",
      "description": "Real-time waste collection system with geospatial tracking and ML-based classification.",
      "stack": ["Python", "Node.js", "Flask", "Redis", "Keras", "AWS", "Redis"],
      "category": ["Backend", "Data Engineering"],
      "impact": "Improved route efficiency by 40% and achieved 93.5% classification accuracy.",
      "github": "https://github.com/username/waste-collection-assistor",
      "demo": "#",
      "slug": "waste-collection-assistor",
      "year": "2024"
    },
    {
      "title": "DataNova",
      "description": "Distributed data processing pipeline with real-time event handling and workflow orchestration.",
      "stack": ["Python", "Spark", "Airflow", "Kafka", "Cassandra", "Docker"],
      "category": ["Data Engineering"],
      "impact": "Processed 100K+ events/sec with fault tolerance; automated orchestration reduced overhead.",
      "github": "https://github.com/username/datanova",
      "demo": "#",
      "slug": "datanova",
      "year": "2024"
    }            
  ];

  // Get all unique stack technologies and categories
  const allStacks = Array.from(new Set(projects.flatMap(p => p.stack)));
  const allCategories = Array.from(new Set(projects.flatMap(p => p.category)));

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.stack.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
                         const matchesStack = selectedStack.length === 0 || 
                         selectedStack.some(stack => 
                            project.stack.includes(stack) || 
                            project.category.includes(stack) // <-- here changed to includes
                         );    
    
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
              Projects
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A collection of projects solving real-world problems.
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
                    {project.category.join(" | ")}
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
