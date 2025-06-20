
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock blog post data - in a real app this would come from an API or database
  const blogPosts = {
    "debugging-flaky-ai-socket-connection": {
      title: "How I debugged a flaky AI socket connection",
      excerpt: "Tracking down intermittent WebSocket disconnections in a production ML inference pipeline and the debugging techniques that saved the day.",
      content: `
        <h2>The Problem</h2>
        <p>Our AI inference pipeline was experiencing intermittent WebSocket disconnections that were causing significant issues in production. Users would lose their real-time predictions mid-stream, leading to a poor user experience and frustrated customers.</p>
        
        <h2>Initial Investigation</h2>
        <p>The first step was to understand the pattern of failures. I started by analyzing our logs and found that disconnections were happening roughly every 10-15 minutes, but not consistently. This ruled out simple timeout issues.</p>
        
        <h2>The Discovery</h2>
        <p>After diving deeper into the network layer, I discovered that our load balancer was rotating connections based on a health check that wasn't accounting for active WebSocket connections. The solution involved implementing connection affinity and proper WebSocket-aware health checks.</p>
        
        <h2>The Fix</h2>
        <p>We implemented a combination of connection pooling, retry mechanisms with exponential backoff, and proper connection state management. The result was a 99.9% reduction in unexpected disconnections.</p>
        
        <h2>Lessons Learned</h2>
        <ul>
          <li>Always check your load balancer configuration when dealing with WebSocket issues</li>
          <li>Implement proper connection state management from the start</li>
          <li>Monitor connection patterns, not just error rates</li>
          <li>Have a robust retry mechanism with circuit breaker patterns</li>
        </ul>
      `,
      tags: ["AI", "Debugging", "WebSockets", "Production"],
      date: "2024-01-15",
      readTime: "8 min read"
    },
    "2pc-cross-shard-raft-kv-store": {
      title: "Why we chose 2PC for cross-shard Raft KV store",
      excerpt: "Exploring the trade-offs between different consensus algorithms and why Two-Phase Commit was the right choice for our distributed system.",
      content: `
        <h2>The Challenge</h2>
        <p>Building a distributed key-value store that spans multiple Raft clusters (shards) presents unique challenges. While Raft provides strong consistency within a single cluster, coordinating transactions across multiple clusters requires additional consensus mechanisms.</p>
        
        <h2>Why Two-Phase Commit?</h2>
        <p>After evaluating several options including Saga patterns and eventually consistent approaches, we chose Two-Phase Commit (2PC) for several key reasons:</p>
        
        <ul>
          <li><strong>ACID Guarantees:</strong> Our use case required strong consistency across shards</li>
          <li><strong>Simpler Recovery:</strong> 2PC has well-understood failure modes and recovery procedures</li>
          <li><strong>Performance:</strong> For our workload, the latency overhead was acceptable</li>
        </ul>
        
        <h2>Implementation Details</h2>
        <p>Our implementation uses a coordinator node that manages the 2PC protocol across Raft shards. Each shard maintains its own Raft log while participating in cross-shard transactions through the coordinator.</p>
        
        <h2>Performance Results</h2>
        <p>The system handles 10,000+ transactions per second while maintaining ACID properties across shards. Transaction latency averages 12ms, which meets our performance requirements.</p>
        
        <h2>Trade-offs and Considerations</h2>
        <p>While 2PC introduces potential blocking scenarios, our monitoring shows these are rare in practice. The benefits of strong consistency outweigh the coordination overhead for our use case.</p>
      `,
      tags: ["Distributed Systems", "Raft", "2PC", "Architecture"],
      date: "2024-01-08",
      readTime: "12 min read"
    }
  };

  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
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
              <Link to="/projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/blog" className="text-blue-600 font-medium">Blog</Link>
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
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="flex items-center gap-2">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <article className="bg-white/80 dark:bg-slate-800/80 rounded-lg border border-slate-200 dark:border-slate-700 p-8 mb-8">
            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
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
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-slate-200">
              {post.title}
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-slate-800 dark:prose-headings:text-slate-200 prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-li:text-slate-600 dark:prose-li:text-slate-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
