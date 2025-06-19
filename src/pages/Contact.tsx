
import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
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
              <Link to="/about" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 transition-colors">About</Link>
              <span className="text-blue-600 font-medium">Contact</span>
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Have an interesting project or opportunity? I'd love to hear about it. Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="frosted-glass border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Get In Touch</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Ready to discuss your next project or just want to say hello? Drop me a message!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Email</p>
                      <a href="mailto:alex.chen@email.com" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        alex.chen@email.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Phone</p>
                      <a href="tel:+1234567890" className="text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                      <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Location</p>
                      <p className="text-slate-600 dark:text-slate-400">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="frosted-glass border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 dark:text-slate-200">Connect With Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="https://github.com/alexchen" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="https://linkedin.com/in/alexchen" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href="https://twitter.com/alexchen" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="frosted-glass border-slate-200 dark:border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Send a Message</CardTitle>
                <CardDescription className="text-slate-600 dark:text-slate-400">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="bg-white/80 dark:bg-slate-800/80"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-white/80 dark:bg-slate-800/80"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-white/80 dark:bg-slate-800/80"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="bg-white/80 dark:bg-slate-800/80"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
