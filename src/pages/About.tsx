import { Download, Mail, MapPin, Calendar,Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import profileImage from '@/assets/michelle-raj-profile.jpeg';

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Michelle</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineer turned analytics enthusiast with a passion for transforming complex data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-6 text-center">
                <img
                  src={profileImage}
                  alt="Michelle Raj"
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-6 shadow-soft"
                />
                
                <h2 className="text-2xl font-bold text-foreground mb-2">Michelle Raj</h2>
                <p className="text-primary font-medium mb-4">Data Visualization & Analytics</p>
                
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Toronto, Canada</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>3 Years Experience</span>
                  </div>
                  
                 
                </div>
              <a href="/MichelleRaj_Resume.pdf" download>
                <Button className="w-full mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/michelle20raj/" download>
                <Button className="w-full mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Linkedin className="mr-2 h-5 w-5" />
                  Linkedin
                </Button>
              </a>
              <a href="https://github.com/michelleraj/" download>
                <Button className="w-full mt-6 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Bio */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">My Story</h3>
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="mb-4">
                  My journey into analytics hasn’t been a straight line, but it’s always been driven by curiosity and a desire to help others. 
                  I started out in engineering, later deepened my skills with a data analytics certification, and along the way discovered how much I enjoy turning information into real solutions.

                  </p>
                  <p className="mb-4">
                  At TD Bank, I took on senior responsibilities during a staff shortage, leading critical operations to keep key business systems stable and responsive under pressure.  
                   I worked closely with different teams to spot patterns and solve technical problems that made life easier for thousands of users. 
                  In healthcare, I helped built template website dashboards identify ways to reduce wait times always focused on how data can create a better experience for people.
                  
                  </p>
                 
                  <p className="mb-4">
                  Even when I needed to step back for almost a year for my health, I kept learning by taking on AI evaluation projects, using careful analysis to improve data quality and fairness.

                What excites me most is using analytics to bring clarity to complex challenges and support decisions that make a genuine impact. I’m looking for opportunities where I can keep learning and use data to support positive change.
                </p>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Education</h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="text-xl font-semibold text-foreground">Bachelor of Engineering</h4>
                    <p className="text-primary font-medium">Computer Engineering</p>
                    <p className="text-muted-foreground">Toronto Metropolitan University (formerly Ryerson University)</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Strong foundation in programming, Data Engineering, and Mathematical Foundations of Machine Learning 
                    </p>
                  </div>

                  <div className="border-l-4 border-accent pl-6">
                    <h4 className="text-xl font-semibold text-foreground">Certificate in Data Analytics & Visualization</h4>
                    <p className="text-primary font-medium">Data Analytics and Visualization</p>
                    <p className="text-muted-foreground">University of Toronto</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Specialized training in statistical analysis, data visualization, and business intelligence tools
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Core Competencies</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technical Skills</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Data Visualization (Tableau, Power BI)</li>
                      <li>• Statistical Analysis (Python, R)</li>
                      <li>• Database Management (SQL)</li>
                      <li>• Business Intelligence</li>
                      <li>• Machine Learning</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Domain Expertise</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Financial Services</li>
                      <li>• Healthcare Analytics</li>
                      <li>• Operations Analysis</li>
                      <li>• Performance Metrics</li>
                      <li>• Process Optimization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;