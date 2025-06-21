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
      title: "How to Design Scalable Systems: A Step-by-Step Guide",
      excerpt: "A structured approach to architecting scalable backend systems inspired by HelloInterview.",
      content: `Designing scalable systems is a critical skill for software engineers. This guide walks you through clarifying requirements, defining APIs, creating high-level architectures, addressing bottlenecks, ensuring fault tolerance, security, and observability. For deeper practice, check HelloInterview's System Design resources.`,
      tags: ["System Design", "Backend", "Scalability", "Architecture"],
      date: "2025-06-20",
      readTime: "12 min read",
      slug: "design-scalable-systems-guide"
    },
    {
      id: 2,
      title: "Designing Microservices for Failure: Avoiding Cascading Outages",
      excerpt: "Learn how to build resilient microservices that prevent failures from cascading and causing system-wide outages.",
      content: `Failures in distributed systems are inevitable. This post covers common pitfalls like missing timeouts and infinite retries, and introduces resilience patterns such as circuit breakers, bulkheads, fallbacks, and timeouts to build robust microservices that survive failures gracefully.`,
      tags: ["Microservices", "Resilience", "System Design", "Reliability"],
      date: "2025-06-18",
      readTime: "10 min read",
      slug: "microservices-failure-design"
    },
    {
      id: 3,
      title: "Zero-Downtime Database Migrations: A Practical Guide",
      excerpt: "How to migrate databases in production environments without impacting uptime or user experience.",
      content: `Database migrations are critical but risky in live environments. This article discusses techniques like blue-green deployments, feature toggles, backward-compatible schema changes, and phased rollouts to ensure zero downtime and seamless user experiences during database upgrades.`,
      tags: ["Database", "DevOps", "Infrastructure", "Migrations"],
      date: "2025-06-15",
      readTime: "9 min read",
      slug: "zero-downtime-database-migrations"
    },
    {
      id: 4,
      title: "Efficient Infrastructure Monitoring with Prometheus and Grafana",
      excerpt: "A hands-on guide to setting up real-time monitoring and alerting for cloud-native applications.",
      content: `Monitoring infrastructure is essential for reliable operations. Learn how to use Prometheus to collect metrics, Grafana to visualize data, and implement alerting rules to detect issues early. Includes tips on labeling, federation, and scaling monitoring stacks for large environments.`,
      tags: ["Monitoring", "Prometheus", "Grafana", "Infrastructure"],
      date: "2025-06-10",
      readTime: "11 min read",
      slug: "infrastructure-monitoring-prometheus-grafana"
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
