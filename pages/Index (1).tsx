import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Code,
  Database,
  TrendingUp,
  Users,
  Zap,
  Trophy,
  Target,
  Rocket,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Learning",
      description: "Interactive tutorials with real-time feedback and personalized learning paths",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Integrated Lab Environment",
      description: "Code, visualize, and deploy - all in one place. No setup required",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Gamified Progress",
      description: "Earn XP, maintain streaks, unlock badges, and climb the leaderboard",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Real Datasets",
      description: "Practice with industry-standard datasets from Kaggle and beyond",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Learning",
      description: "Collaborate, get mentorship, and share projects with peers",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Portfolio Builder",
      description: "Auto-sync projects to GitHub and build your professional portfolio",
    },
  ];

  const tools = [
    { name: "Python", icon: Code, color: "text-blue-400" },
    { name: "Jupyter", icon: BookOpen, color: "text-orange-400" },
    { name: "TensorFlow", icon: Brain, color: "text-orange-500" },
    { name: "PyTorch", icon: Zap, color: "text-red-400" },
    { name: "Pandas", icon: Database, color: "text-blue-300" },
    { name: "NumPy", icon: TrendingUp, color: "text-blue-500" },
    { name: "Scikit-learn", icon: Target, color: "text-orange-400" },
    { name: "Power BI", icon: TrendingUp, color: "text-yellow-400" },
    { name: "Tableau", icon: Database, color: "text-blue-400" },
    { name: "SQL", icon: Database, color: "text-blue-500" },
    { name: "Docker", icon: Code, color: "text-blue-400" },
    { name: "LangChain", icon: Brain, color: "text-green-400" },
    { name: "Hugging Face", icon: Sparkles, color: "text-yellow-400" },
    { name: "FastAPI", icon: Zap, color: "text-green-500" },
    { name: "Streamlit", icon: Rocket, color: "text-red-400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary animate-pulse-glow" />
            <span className="text-2xl font-bold text-primary">AI Lab</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard">
              <Button variant="ghost">Dashboard</Button>
            </Link>
            <Link to="/roadmap">
              <Button variant="ghost">Roadmap</Button>
            </Link>
            <Button variant="default">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <Badge className="mb-6 animate-slide-up" variant="outline">
          <Zap className="w-3 h-3 mr-1" />
          The Future of AI Education
        </Badge>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground animate-slide-up leading-tight">
          Master AI & ML
          <br />
          <span className="text-primary">One Lab at a Time</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-slide-up">
          Your all-in-one gamified platform to learn, practice, and master AI, Machine Learning, and
          Data Science tools - from Python to Production.
        </p>
        <div className="flex items-center justify-center gap-4 animate-slide-up">
          <Link to="/dashboard">
            <Button size="lg" className="text-lg px-8 py-6">
              <Rocket className="w-5 h-5 mr-2" />
              Start Learning Free
            </Button>
          </Link>
          <Link to="/roadmap">
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Target className="w-5 h-5 mr-2" />
              View Roadmap
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          <Card className="p-6 bg-card/80 backdrop-blur border-border shadow-card">
            <p className="text-4xl font-bold text-primary mb-2">7</p>
            <p className="text-sm text-muted-foreground">Learning Levels</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur border-border shadow-card">
            <p className="text-4xl font-bold text-primary mb-2">50+</p>
            <p className="text-sm text-muted-foreground">Hands-on Labs</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur border-border shadow-card">
            <p className="text-4xl font-bold text-primary mb-2">15+</p>
            <p className="text-sm text-muted-foreground">AI/ML Tools</p>
          </Card>
          <Card className="p-6 bg-card/80 backdrop-blur border-border shadow-card">
            <p className="text-4xl font-bold text-primary mb-2">∞</p>
            <p className="text-sm text-muted-foreground">Career Opportunities</p>
          </Card>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-muted-foreground">
            A complete ecosystem for AI & ML mastery
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border shadow-card hover:shadow-glow transition-all hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">All Tools, One Platform</h2>
          <p className="text-xl text-muted-foreground">
            Master industry-leading technologies without switching platforms
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border shadow-card hover:shadow-glow hover:scale-105 transition-all cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${tool.color} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-7 h-7" />
                  </div>
                  <span className="font-semibold text-foreground text-sm">{tool.name}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 bg-gradient-primary border-0 shadow-glow text-center">
          <TrendingUp className="w-16 h-16 mx-auto mb-6 text-primary-foreground animate-float" />
          <h2 className="text-4xl font-bold mb-4 text-primary-foreground">
            Ready to Level Up Your AI Skills?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students mastering AI & ML through hands-on practice and gamified
            learning.
          </p>
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Rocket className="w-5 h-5 mr-2" />
              Start Your Journey
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 AI Lab. Empowering the next generation of AI Engineers.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
