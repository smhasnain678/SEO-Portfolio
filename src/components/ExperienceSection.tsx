import { Card, CardContent } from '../components/ui/card';
import { Briefcase, Calendar, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "SEO Specialist Intern",
      company: "Grands Digital",
      period: "June 2025 - September 2025",
      location: "Hyderabad, Pakistan",
      achievements: [
        "Worked closely with a diverse team of SEO specialists, content creators and developers",
        "Managed guest posting campaigns with 200+ high-authority publications",
        "Led a team of 5 SEO specialists and content writers"
      ]
    },
    {
      title: "Coordinator",
      company: "Leopards Courier Services (Headquarter)",
      period: "Nov 2025 - Jan 2026",
      location: "Karachi, Pakistan",
      achievements: [
        "Supported daily coordination tasks between departments at head office",
        "Assisted in managing schedules, documentation, and internal communication",
        "Contributed to operational efficiency during peak logistics season",
        "Collaborated with team leads to streamline administrative workflows"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30 hidden md:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>

                  <Card className="ml-0 md:ml-20 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="bg-primary/10 p-3 rounded-lg">
                            <Briefcase className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1 text-start">
                              {exp.title}
                            </h3>
                            <p className="text-lg text-foreground font-semibold mb-2 text-start">
                              {exp.company}
                            </p>
                            <div className="flex items-center space-x-4 text-muted-foreground text-sm">
                              <div className="flex items-center space-x-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.period}</span>
                              </div>
                              <span>•</span>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="ml-16">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;