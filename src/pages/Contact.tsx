import { useState } from "react";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage("");

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For now, we'll use a mailto link as a fallback
      // In a real app, you'd integrate with EmailJS, Formspree, or your own backend
      const mailtoLink = `mailto:azizyrangwala@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      
      // Open email client
      window.open(mailtoLink, '_blank');
      
      // Show success message
      setSubmitStatus('success');
      setSubmitMessage("Thank you! Your message has been sent. I'll get back to you soon!");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage("Sorry, there was an error sending your message. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              Get In Touch
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Let's discuss opportunities, technical challenges, or collaborate on exciting projects.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
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
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        placeholder="Your name"
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
                        onChange={handleChange}
                        required
                        className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                        placeholder="your.email@example.com"
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
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      placeholder="What's this about?"
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
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                  
                  {/* Status Message */}
                  {submitStatus !== 'idle' && (
                    <div className={`mt-4 p-4 rounded-lg border ${
                      submitStatus === 'success' 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    }`}>
                      <div className="flex items-center gap-2">
                        {submitStatus === 'success' ? (
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                        )}
                        <span className={`text-sm font-medium ${
                          submitStatus === 'success' 
                            ? 'text-green-800 dark:text-green-200' 
                            : 'text-red-800 dark:text-red-200'
                        }`}>
                          {submitMessage}
                        </span>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Contact Information</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Reach out through any of these channels
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span>azizyrangwala@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span>+1 ---</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span>Irvine, CA</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Connect</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Find me on these platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://github.com/aziz-rangwala" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="https://linkedin.com/in/aziz-rangwala" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="bg-white/80 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-slate-800 dark:text-slate-200">Availability</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-slate-600 dark:text-slate-300">
                    <p>🟢 <strong>Open to:</strong> Full-time opportunities</p>
                    <p>🟡 <strong>Limited:</strong> Consulting projects</p>
                    <p>⚡ <strong>Response time:</strong> Usually within 24 hours</p>
                    <p>🌎 <strong>Remote:</strong> Available worldwide</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
