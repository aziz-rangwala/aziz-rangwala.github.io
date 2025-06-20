import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const blogPosts = [
    {
      id: 1,
      title: "How I debugged a flaky AI socket connection",
      excerpt: "Tracking down intermittent WebSocket disconnections in a production ML inference pipeline and the debugging techniques that saved the day.",
      content: "Deep dive into debugging network issues, connection pooling, and implementing robust retry mechanisms...",
      tags: ["AI", "Debugging", "WebSockets", "Production"],
      date: "2024-01-15",
      readTime: "8 min read",
      slug: "debugging-flaky-ai-socket-connection"
    },
    {
      id: 2,
      title: "Why we chose 2PC for cross-shard Raft KV store",
      excerpt: "Exploring the trade-offs between different consensus algorithms and why Two-Phase Commit was the right choice for our distributed system.",
      content: "Analysis of distributed consensus protocols, CAP theorem implications, and real-world performance considerations...",
      tags: ["Distributed Systems", "Raft", "2PC", "Architecture"],
      date: "2024-01-08",
      readTime: "12 min read",
      slug: "2pc-cross-shard-raft-kv-store"
    },
    {
      id: 3,
      title: "Scraping fast, secure sites without Selenium",
      excerpt: "Building a high-performance web scraper that bypasses modern anti-bot measures using Go and native HTTP libraries.",
      content: "Techniques for efficient web scraping, handling JavaScript-heavy sites, and maintaining ethical scraping practices...",
      tags: ["Go", "Web Scraping", "Performance", "Security"],
      date: "2024-01-01",
      readTime: "6 min read",
      slug: "fast-web-scraping-without-selenium"
    },
    {
      id: 4,
      title: "Optimizing Docker builds for ML workloads",
      excerpt: "Reducing Docker image sizes by 70% and build times by 50% for machine learning applications through layer optimization and multi-stage builds.",
      content: "Best practices for containerizing ML applications, dependency management, and CI/CD optimization...",
      tags: ["Docker", "ML", "DevOps", "Optimization"],
      date: "2023-12-20",
      readTime: "10 min read",
      slug: "optimizing-docker-builds-ml-workloads"
    },
    {
      id: 5,
      title: "Building a real-time metrics dashboard with eBPF",
      excerpt: "Creating low-overhead system monitoring using eBPF programs and visualizing performance metrics in real-time.",
      content: "Implementation guide for eBPF-based monitoring, kernel programming, and building responsive dashboards...",
      tags: ["eBPF", "Monitoring", "Systems", "Observability"],
      date: "2023-12-10",
      readTime: "15 min read",
      slug: "realtime-metrics-dashboard-ebpf"
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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
              <Link to="/projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Projects</Link>
              <span className="text-blue-600 font-medium">Blog</span>
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Engineering Blog
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Deep dives into distributed systems, performance optimization, and lessons learned from building scalable infrastructure.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input
              placeholder="Search posts by title, content, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700"
            />
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button variant="ghost" size="sm" asChild className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Read more
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500 dark:text-slate-400 text-lg">
                No posts found matching "{searchTerm}". Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
