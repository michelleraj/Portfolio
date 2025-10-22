import { Calendar, MapPin, Building, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'AI Evaluation Specialist',
      company: 'Outlier AI & Crowdgen',
      location: 'Remote',
      duration: 'Dec 2024 – April 2025',
      type: 'Contractor',
      description: 'Supporting machine learning model training through accurate data labeling, annotation, and quality assurance.',
      highlights: [
        'Achieved over 95% accuracy in labeling and annotating datasets, ensuring data validation, quality control, and compliance with project standards',
        'Adapted to dynamic project requirements in an agile environment, prioritizing critical tasks and delivering high-quality outputs under tight deadlines',
        'Maintained detailed project documentation, contributed to workflow automation, and supported continuous process improvement initiatives'
      ],
      skills: ['Machine Learning', 'Data Annotation', 'Quality Control', 'Data Governance', 'Process Optimization', 'Agile Methodology']
    },
    {
      id: 2,
      title: 'IT Operations Analyst',
      company: 'TD Bank',
      location: 'Toronto, ON',
      duration: 'Dec 2021 – Nov 2023',
      type: 'Full-time',
      description: 'Led change management, project coordination, and incident resolution to optimize IT operations and system performance.',
      highlights: [
        'Spearheaded change management by prioritizing and executing over 20 system upgrades within scheduled maintenance windows',
        'Collaborated with IT developers and stakeholders to optimize production environments, aligning with ITIL best practices to enhance monitoring protocols and deliver operational reports.',
        'Coordinated incident management and problem resolution, leading cross-functional teams in troubleshooting and conducting root cause analysis (RCA)',
        'Managed project timelines and status reporting, facilitating communication with senior management and stakeholders',
        'Developed comprehensive user guides and delivered live training sessions, enhancing user adoption and operational efficiency',
        
      ],
      skills: ['ITIL Framework', 'Change Management', 'Project Coordination', 'Incident Management', 'Risk Assessment', 'Stakeholder Management']
    },
    {
      id: 3,
      title: 'Software Developer / Data Analyst',
      company: 'Orchid Analytics',
      location: 'Toronto, ON',
      duration: 'May 2021 – Sep 2021',
      type: 'Contract',
      description: 'Designed healthcare data collection systems and developed interactive dashboards to support evidence-based decision making.',
      highlights: [
        'Designed and administered survey questionnaires to collect healthcare data aimed at reducing hospital wait times',
        'Developed and maintained responsive websites and interactive dashboards with embedded data visualization tools',
        'Identified operational bottlenecks through data analysis and recommended business process improvements'
      ],
      skills: ['Data Visualization', 'Healthcare Analytics', 'Web Development', 'Business Intelligence', 'Survey Design', 'Process Improvement']
    }
  ];

  const certifications = [
    'University of Toronto: Data Analytics and Visualization Certification',
    'Microsoft Certified: Azure AI Fundamentals'
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through roles that have shaped my expertise in data analytics, visualization, and IT operations
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.id} className="bg-gradient-card shadow-card hover:shadow-soft transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
                      <Badge 
                        variant={exp.type === 'Current Role' ? 'default' : 'secondary'}
                        className={exp.type === 'Current Role' ? 'bg-gradient-primary' : ''}
                      >
                        {exp.type}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary font-medium mb-2">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies & Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="mt-12 bg-gradient-card shadow-card">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Certifications & Credentials</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
                  <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
       
      </div>
    </div>
  );
};

export default Experience;