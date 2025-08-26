import { Card, CardContent } from '../components/ui/card';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Intermediate",
      institution: "Govt College For IT Guru Nagar, Hyderabad",
      location: "Hyderabad, Sindh",
      year: "2020 - 2022",
      // description: "Specialized in digital marketing strategies, SEO techniques, and data analytics with focus on modern marketing tools and methodologies."
    },
    {
      degree: "Digital Marketing Certification",
      institution: "Aptech",
      location: "Karachi",
      year: "2024",
      description: "Comprehensive training in Google Analytics, data interpretation, and performance measurement for digital marketing campaigns."
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index}
                className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="px-6 py-4">
                  <div className="flex flex-col md:flex-row md:items-start text-start md:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-foreground font-semibold mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground text-sm">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.year}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-start ml-16">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;