import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-primary/10 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            I am <span className="text-primary animate-bounce-gentle inline-block">Waleed Rashid</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground mb-6">
            SEO Specialist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Digital Marketing Expert | Guest Posting Specialist | Helping businesses grow their online presence through strategic SEO and content marketing
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 transform"
                style={{ animationDelay: `${index * 0.1}s` }}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 md:h-8 md:w-8 animate-fade-in" />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Download CV Button using the same Button component */}
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-slide-in-left"
              asChild
            >
              <a href="/cv/waleed-cv.pdf" download>
                Download CV
              </a>
            </Button>

            {/* Get In Touch Button */}
            <Button
              variant="outline"
              size="lg"
              className="animate-slide-in-right"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>



        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;