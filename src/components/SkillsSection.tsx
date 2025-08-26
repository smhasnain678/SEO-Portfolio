import { Card, CardContent } from '@/components/ui/card';
import { 
  Search, 
  TrendingUp, 
  FileText, 
  Link, 
  BarChart, 
  Globe,
  Zap,
  Target,
  Users,
  Code,
  Smartphone,
  Database
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "SEO Expertise",
      icon: Search,
      skills: [
        { name: "Technical SEO", level: 95 },
        { name: "On-Page SEO", level: 98 },
        { name: "Off-Page SEO", level: 92 },
        { name: "Local SEO", level: 88 },
        { name: "Keyword Research", level: 96 }
      ]
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      skills: [
        { name: "Content Marketing", level: 94 },
        { name: "Social Media Marketing", level: 85 },
        { name: "Email Marketing", level: 80 },
        { name: "PPC Campaigns", level: 78 },
        { name: "Conversion Optimization", level: 88 }
      ]
    },
    {
      title: "Analytics & Tools",
      icon: BarChart,
      skills: [
        { name: "Google Analytics", level: 96 },
        { name: "Google Search Console", level: 94 },
        { name: "SEMrush", level: 92 },
        { name: "Ahrefs", level: 90 },
        { name: "Screaming Frog", level: 85 }
      ]
    }
  ];

  const tools = [
    { name: "Google Analytics", icon: BarChart },
    { name: "SEMrush", icon: Search },
    { name: "Ahrefs", icon: Link },
    { name: "Google Search Console", icon: Globe },
    { name: "Screaming Frog", icon: Code },
    { name: "Yoast SEO", icon: Target },
    { name: "Moz", icon: TrendingUp },
    { name: "BuzzSumo", icon: Users },
    { name: "Hotjar", icon: Smartphone },
    { name: "Google Tag Manager", icon: Database },
    { name: "Canva", icon: FileText },
    { name: "WordPress", icon: Zap }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Skills & Tools
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg mb-3 mx-auto w-fit transition-colors">
                    <tool.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {tool.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { number: "200+", label: "Projects Completed" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" },
            { number: "95%", label: "Success Rate" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-primary/5 rounded-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;