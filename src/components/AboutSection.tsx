import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import waleed from '../assets/waleed.jpeg'; // adjust the path as needed

const AboutSection = () => {
  const highlights = [
    "5+ Years of SEO Experience",
    "200+ Successful Projects",
    "Expert in Guest Posting",
    "Digital Marketing Strategist",
    "Google Analytics Certified",
    "Content Marketing Specialist"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="animate-slide-in-left">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="w-84 h-84 bg-primary/10 rounded-full flex items-center justify-center">
                  {/* <span className="text-6xl font-bold text-primary">W</span> */}
                  <img
                    src={waleed}  // Use the imported image
                    alt="W"
                    className="w-68 h-68 object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SEO</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="animate-slide-in-right">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Professional SEO & Digital Marketing Expert
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  With over 5 years of experience in the digital marketing industry, I specialize in
                  Search Engine Optimization, guest posting, and comprehensive digital marketing strategies.
                  I help businesses improve their online visibility and drive organic traffic through
                  data-driven SEO techniques.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  My expertise includes technical SEO, content optimization, link building, keyword research,
                  and guest posting on high-authority websites. I've successfully helped numerous clients
                  achieve top rankings on Google and increase their organic traffic significantly.
                </p>

                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;