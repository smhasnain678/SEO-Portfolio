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
  const services = [
    { name: "Niche Comment", icon: Target },
    { name: "Blog Comment", icon: FileText },
    { name: "EDU Links", icon: Code },
    { name: "Guest Posting", icon: Users },
    { name: "Citations", icon: Database },
    { name: "Map Embed", icon: Globe },
    { name: "Profile Links", icon: Link },
    { name: "All Services Available", icon: Zap }
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
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Services */}
        <div className="max-w-5xl mx-auto mb-16">
          {/* <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            Our Services
          </h3> */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer animate-fade-in hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg mb-3 mx-auto w-fit transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {service.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools & Technologies */}
        {/* <div className="max-w-4xl mx-auto">
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
        </div> */}

        {/* Statistics */}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
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
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;