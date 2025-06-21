import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock blog post data - in a real app this would come from an API or database
  const blogPosts = {
    "design-scalable-systems-guide": {
      title: "How to Design Scalable Systems: A Step-by-Step Guide",
      excerpt: "A structured approach to architecting scalable backend systems inspired by HelloInterview.",
      content: `
        <div class="space-y-8">
          <section class="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
              Introduction
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">Designing scalable systems is a foundational skill for backend engineers. Inspired by HelloInterview's system design principles, this guide provides a step-by-step approach to building systems that scale efficiently and reliably.</p>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
              Understand Requirements
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Clarify functional and non-functional requirements, including expected load, latency, data consistency, and fault tolerance.</p>
            <div class="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Considerations:</h3>
              <ul class="space-y-2 text-slate-700 dark:text-slate-300">
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span>Expected user load and traffic patterns</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span>Performance and latency requirements</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span>Data consistency and availability needs</li>
                <li class="flex items-start"><span class="text-green-500 mr-2">•</span>Fault tolerance and disaster recovery</li>
              </ul>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
              Define APIs and Data Models
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Create clear APIs and data schemas that support scalability and flexibility.</p>
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border-l-4 border-purple-500">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Best Practices:</h3>
              <ul class="space-y-2 text-slate-700 dark:text-slate-300">
                <li class="flex items-start"><span class="text-purple-500 mr-2">✓</span>Design RESTful APIs with clear endpoints</li>
                <li class="flex items-start"><span class="text-purple-500 mr-2">✓</span>Use consistent data formats and schemas</li>
                <li class="flex items-start"><span class="text-purple-500 mr-2">✓</span>Plan for versioning and backward compatibility</li>
              </ul>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
              Design High-Level Architecture
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Choose appropriate components such as load balancers, caches, databases, and message queues. Consider microservices vs monolith, and separation of concerns.</p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h4 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Core Components:</h4>
                <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Load Balancers</li>
                  <li>• Caching Layers</li>
                  <li>• Database Systems</li>
                  <li>• Message Queues</li>
                </ul>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h4 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Architecture Patterns:</h4>
                <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  <li>• Microservices vs Monolith</li>
                  <li>• Event-Driven Architecture</li>
                  <li>• CQRS Pattern</li>
                  <li>• API Gateway</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">5</span>
              Address Bottlenecks
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Identify potential scalability bottlenecks and design strategies like sharding, replication, and caching to mitigate them.</p>
            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-3">Scalability Strategies:</h3>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="text-center">
                  <div class="bg-red-100 dark:bg-red-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">S</span>
                  </div>
                  <h4 class="font-medium text-slate-800 dark:text-slate-200">Sharding</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400">Distribute data across multiple databases</p>
                </div>
                <div class="text-center">
                  <div class="bg-red-100 dark:bg-red-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">R</span>
                  </div>
                  <h4 class="font-medium text-slate-800 dark:text-slate-200">Replication</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400">Create multiple copies for availability</p>
                </div>
                <div class="text-center">
                  <div class="bg-red-100 dark:bg-red-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <span class="text-red-600 dark:text-red-400 font-bold">C</span>
                  </div>
                  <h4 class="font-medium text-slate-800 dark:text-slate-200">Caching</h4>
                  <p class="text-sm text-slate-600 dark:text-slate-400">Store frequently accessed data</p>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">6</span>
              Ensure Reliability and Observability
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Design for failure by incorporating retries, circuit breakers, health checks, monitoring, and alerting.</p>
            <div class="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-4 border border-teal-200 dark:border-teal-800">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-3">Reliability Components:</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="bg-teal-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Retry mechanisms with exponential backoff</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-teal-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Circuit breakers to prevent cascading failures</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-teal-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Health checks and monitoring</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-teal-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Alerting and incident response</span>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-6 border-l-4 border-indigo-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Further Learning</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">For detailed practice problems and solutions, explore <a href="https://hellointerview.com" target="_blank" rel="noopener noreferrer" class="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium underline">HelloInterview</a>.</p>
            <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
              <p class="text-sm text-slate-600 dark:text-slate-400 italic">Ready to practice? Start with system design problems and work your way up to complex distributed systems.</p>
            </div>
          </section>
        </div>
      `,
      tags: ["System Design", "Backend", "Scalability", "Architecture"],
      date: "2025-06-20",
      readTime: "12 min read"
    },
    "microservices-failure-design": {
      title: "Designing Microservices for Failure: Avoiding Cascading Outages",
      excerpt: "Learn how to build resilient microservices that prevent failures from cascading and causing system-wide outages.",
      content: `
        <div class="space-y-8">
          <section class="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg p-6 border-l-4 border-red-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">!</span>
              The Inevitable Failure
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">In distributed systems, failures are not just probable, but inevitable. Without proper design, a single failing service can cascade and bring down the entire system.</p>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Common Pitfalls</h2>
            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">⚠</span>
                  <div>
                    <strong class="text-slate-800 dark:text-slate-200">Missing timeouts</strong>
                    <p class="text-slate-600 dark:text-slate-400 text-sm">Causing indefinite waits and resource exhaustion</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">⚠</span>
                  <div>
                    <strong class="text-slate-800 dark:text-slate-200">Infinite retries</strong>
                    <p class="text-slate-600 dark:text-slate-400 text-sm">Overwhelming services and creating feedback loops</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">⚠</span>
                  <div>
                    <strong class="text-slate-800 dark:text-slate-200">Lack of circuit breakers</strong>
                    <p class="text-slate-600 dark:text-slate-400 text-sm">Failing to isolate failing components</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Key Resilience Patterns</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">CB</span>
                  Circuit Breakers
                </h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Stop calling failing services temporarily to prevent cascading failures.</p>
              </div>
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">B</span>
                  Bulkheads
                </h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Isolate failures to prevent total system collapse.</p>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">TR</span>
                  Timeouts and Retries
                </h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Fail fast and retry with exponential backoff strategies.</p>
              </div>
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">F</span>
                  Fallbacks
                </h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Provide degraded but acceptable responses when services fail.</p>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Design Considerations</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Design microservices with failure in mind. Ensure that the system continues to operate even when components fail or become slow.</p>
            <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Key Principles:</h3>
              <ul class="space-y-2 text-slate-700 dark:text-slate-300">
                <li class="flex items-center"><span class="text-green-500 mr-2">✓</span>Fail fast and fail safe</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">✓</span>Graceful degradation</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">✓</span>Isolation and containment</li>
                <li class="flex items-center"><span class="text-green-500 mr-2">✓</span>Monitoring and observability</li>
              </ul>
            </div>
          </section>
        </div>
      `,
      tags: ["Microservices", "Resilience", "System Design", "Reliability"],
      date: "2025-06-18",
      readTime: "10 min read"
    },
    "zero-downtime-database-migrations": {
      title: "Zero-Downtime Database Migrations: A Practical Guide",
      excerpt: "How to migrate databases in production environments without impacting uptime or user experience.",
      content: `
        <div class="space-y-8">
          <section class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-6 border-l-4 border-blue-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">⚡</span>
              Why Zero Downtime Migrations Matter
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">Database schema changes are common but risky, especially in production environments where downtime impacts users and business operations.</p>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Techniques for Safe Migrations</h2>
            <div class="space-y-4">
              <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                  Blue-Green Deployments
                </h3>
                <p class="text-slate-700 dark:text-slate-300">Deploy new schema alongside the old to enable seamless switching between versions.</p>
              </div>
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                  Feature Toggles
                </h3>
                <p class="text-slate-700 dark:text-slate-300">Control new features that depend on schema changes to enable gradual rollouts.</p>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                  Backward-Compatible Changes
                </h3>
                <p class="text-slate-700 dark:text-slate-300">Make additive changes that don't break existing code or data structures.</p>
              </div>
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2 flex items-center">
                  <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">4</span>
                  Phased Rollouts
                </h3>
                <p class="text-slate-700 dark:text-slate-300">Gradually switch traffic to new schema versions to minimize risk.</p>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Common Pitfalls</h2>
            <div class="bg-red-50 dark:bg-red-900/20 rounded-lg p-4 border-l-4 border-red-500">
              <ul class="space-y-3">
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <strong class="text-slate-800 dark:text-slate-200">Incompatible changes</strong>
                    <p class="text-slate-600 dark:text-slate-400 text-sm">Breaking changes that require application updates</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <strong class="text-slate-800 dark:text-slate-200">Locking issues</strong>
                    <p class="text-slate-600 dark:text-slate-400 text-sm">Long-running transactions that block other operations</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <span class="text-red-500 mr-3 mt-1">❌</span>
                  <div>
                    <strong class="text-slate-800 dark:text-slate-200">Performance degradation</strong>
                    <p class="text-slate-600 dark:text-slate-400 text-sm">Migrations that impact system performance</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border-l-4 border-green-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Best Practices</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Test migrations on staging, monitor closely, and always have rollback plans.</p>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 text-center">
                <div class="bg-green-100 dark:bg-green-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-green-600 dark:text-green-400 text-xl">🧪</span>
                </div>
                <h4 class="font-medium text-slate-800 dark:text-slate-200">Test Thoroughly</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">Always test on staging first</p>
              </div>
              <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 text-center">
                <div class="bg-blue-100 dark:bg-blue-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-blue-600 dark:text-blue-400 text-xl">📊</span>
                </div>
                <h4 class="font-medium text-slate-800 dark:text-slate-200">Monitor Closely</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">Watch for performance impacts</p>
              </div>
              <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 text-center">
                <div class="bg-red-100 dark:bg-red-800/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                  <span class="text-red-600 dark:text-red-400 text-xl">🔄</span>
                </div>
                <h4 class="font-medium text-slate-800 dark:text-slate-200">Have Rollback Plans</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">Always be prepared to revert</p>
              </div>
            </div>
          </section>
        </div>
      `,
      tags: ["Database", "DevOps", "Infrastructure", "Migrations"],
      date: "2025-06-15",
      readTime: "9 min read"
    },
    "infrastructure-monitoring-prometheus-grafana": {
      title: "Efficient Infrastructure Monitoring with Prometheus and Grafana",
      excerpt: "A hands-on guide to setting up real-time monitoring and alerting for cloud-native applications.",
      content: `
        <div class="space-y-8">
          <section class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-6 border-l-4 border-purple-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
              <span class="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">📊</span>
              Why Monitor Your Infrastructure?
            </h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">Monitoring helps you detect problems early, understand system behavior, and maintain reliability in your cloud-native applications.</p>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Setting Up Prometheus</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Prometheus collects and stores time-series metrics from your applications and infrastructure.</p>
            <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Features:</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 class="font-medium text-slate-800 dark:text-slate-200 mb-2">Data Collection</h4>
                  <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Pull-based scraping</li>
                    <li>• Service discovery</li>
                    <li>• Multi-dimensional data</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-medium text-slate-800 dark:text-slate-200 mb-2">Query Language</h4>
                  <ul class="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                    <li>• PromQL queries</li>
                    <li>• Powerful aggregations</li>
                    <li>• Time-series analysis</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Visualizing Metrics with Grafana</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Grafana provides customizable dashboards to visualize Prometheus metrics effectively.</p>
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-3">Dashboard Capabilities:</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="bg-blue-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Real-time metric visualization</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-blue-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Customizable panels and layouts</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-blue-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Alerting and notifications</span>
                </div>
                <div class="flex items-center">
                  <div class="bg-blue-500 rounded-full w-2 h-2 mr-3"></div>
                  <span class="text-slate-700 dark:text-slate-300">Template variables and annotations</span>
                </div>
              </div>
            </div>
          </section>

          <section class="bg-white dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Advanced Tips</h2>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Labeling Strategy</h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Use consistent labeling conventions across all metrics for better organization and querying.</p>
              </div>
              <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Alerting Rules</h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Implement proactive alerting rules to detect issues before they impact users.</p>
              </div>
              <div class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-4 border border-orange-200 dark:border-orange-800">
                <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-2">Federation</h3>
                <p class="text-slate-700 dark:text-slate-300 text-sm">Consider federation for scaling monitoring in large, distributed environments.</p>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg p-6 border-l-4 border-teal-500">
            <h2 class="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">Getting Started</h2>
            <p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">Begin by instrumenting key services and gradually expand your coverage to achieve comprehensive observability.</p>
            <div class="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
              <h3 class="font-semibold text-slate-800 dark:text-slate-200 mb-3">Implementation Steps:</h3>
              <div class="space-y-2">
                <div class="flex items-center">
                  <span class="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">1</span>
                  <span class="text-slate-700 dark:text-slate-300">Deploy Prometheus and Grafana</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">2</span>
                  <span class="text-slate-700 dark:text-slate-300">Instrument your applications</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">3</span>
                  <span class="text-slate-700 dark:text-slate-300">Create initial dashboards</span>
                </div>
                <div class="flex items-center">
                  <span class="bg-teal-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">4</span>
                  <span class="text-slate-700 dark:text-slate-300">Set up alerting rules</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      `,
      tags: ["Monitoring", "Prometheus", "Grafana", "Infrastructure"],
      date: "2025-06-10",
      readTime: "11 min read"
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
              className="max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
