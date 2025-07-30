import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/michelle-raj-profile.jpeg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Michelle Raj
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                Transforming Data into Insightful Stories
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Data visualization and analytics professional with an engineering background, 
                passionate about turning complex data into actionable insights that drive business decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Link to="/portfolio">
                    View My Work
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-20 scale-110"></div>
                <img
                  src={profileImage}
                  alt="Michelle Raj - Professional Headshot"
                  className="relative w-40 h-40 md:w-46 md:h-46 rounded-full object-cover shadow-soft border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Core Expertise</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-card rounded-lg shadow-card hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Data Visualization</h3>
              <p className="text-muted-foreground">Creating compelling visual narratives from complex datasets</p>
            </div>

            <div className="p-6 bg-gradient-card rounded-lg shadow-card hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Analytics & Insights</h3>
              <p className="text-muted-foreground">Extracting actionable insights to drive business decisions</p>
            </div>

            <div className="p-6 bg-gradient-card rounded-lg shadow-card hover:shadow-soft transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg mb-4 mx-auto flex items-center justify-center">
                <div className="w-6 h-6 bg-background rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Engineering Excellence</h3>
              <p className="text-muted-foreground">Building robust, scalable solutions with technical precision</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
     

      {/* Scroll Indicator */}
      
    </div>
  );
};

export default Home;