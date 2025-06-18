
import { Link } from "react-router-dom";
import { Code, Cpu, Database, Globe, Heart, Coffee, Book, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code Advocate",
      description: "I believe code should be readable, maintainable, and elegant. Every line should tell a story."
    },
    {
      icon: Cpu,
      title: "Performance Obsessed",
      description: "Optimizing systems and reducing latency isn't just work—it's a passion. Every millisecond matters."
    },
    {
      icon: Database,
      title: "Systems Thinker",
      description: "I love designing distributed systems that scale gracefully and handle failures with grace."
    },
    {
      icon: Globe,
      title: "Open Source Contributor",
      description: "Building in the open, sharing knowledge, and learning from the global developer community."
    }
  ];

  const personalTouches = [
    {
      icon: Coffee,
      title: "Fueled by Coffee",
      description: "Third-wave coffee enthusiast. Currently exploring single-origin beans from Ethiopia."
    },
    {
      icon: Book,
      title: "Continuous Learner",
      description: "Always reading papers on distributed systems, consensus algorithms, or the latest in ML/AI."
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Love mentoring junior developers and believe the best code comes from collaborative thinking."
    },
    {
      icon: Heart,
      title: "Side Projects",
      description: "Building tools that solve real problems, from CLI utilities to performance monitoring dashboards."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex Chen
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Home</Link>
              <Link to="/projects" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Projects</Link>
              <Link to="/blog" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Blog</Link>
              <span className="text-blue-600 font-medium">About</span>
              <a href="mailto:alex.chen@email.com" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">Contact</a>
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
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              AC
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Hey, I'm Alex 👋
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              I'm a software engineer who gets excited about building systems that scale, 
              optimizing performance bottlenecks, and creating tools that make developers' lives easier.
              When I'm not debugging distributed systems, you'll find me contributing to open source 
              or experimenting with the latest in AI infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2">
                📍 San Francisco, CA
              </Badge>
              <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-4 py-2">
                🌍 Open to Remote
              </Badge>
              <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-4 py-2">
                🚀 5+ Years Experience
              </Badge>
            </div>
          </div>

          {/* What Drives Me */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">What Drives Me</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              I believe technology should solve real problems and make life better. Here's what gets me excited about engineering:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <value.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Personal Side */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-800 dark:text-slate-200">Beyond the Code</h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              When I'm not in front of a terminal, here's what makes me tick:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalTouches.map((item, index) => (
                <Card key={index} className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                        <item.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-lg text-slate-800 dark:text-slate-200">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Philosophy */}
          <section className="mb-20">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">My Engineering Philosophy</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <blockquote className="text-lg text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  "Great software isn't just about solving problems—it's about solving them elegantly, 
                  maintainably, and with empathy for the humans who will use and maintain it. 
                  I believe in writing code that tells a story, building systems that gracefully handle failure, 
                  and always learning from the brilliant minds in our community."
                </blockquote>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-slate-200">Let's Build Something Amazing</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, technical challenges, or just chat about the latest in distributed systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" asChild>
                <a href="mailto:alex.chen@email.com">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/projects">View My Work</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
