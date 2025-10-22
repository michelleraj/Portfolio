import { useState } from 'react';
import { ExternalLink, Filter, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Healthcare', 'Finance', 'Visualization', 'Analytics'];

  const projects = [
    {
      id: 1,
      title: 'Look Ecommerce Analysis',
      description: 'Through advanced SQL analytics, cohort analysis, and customer segmentation for Look E-commerce.',
      tools: ['SQL', 'Google BigQuery'],
      category: 'Finance',
      image: 'https://cdn.pixabay.com/photo/2015/09/21/14/24/supermarket-949913_1280.jpg?auto=format&fit=crop&w=800&h=400',
      demoLink: 'https://github.com/michelleraj/Look-Ecommerce-Analysis',
      codeLink: 'https://github.com/michelleraj/Look-Ecommerce-Analysis'
    },
    {
      id: 2,
      title: 'GoDaddy Microbusiness Density',
      description: 'This project exploration data analysis on Godaddy microbusiness density across US countiess',
      tools: ['SQL', 'Windows Function',  'Kaggle'],
      category: 'Finance',
      image: 'https://cdn.pixabay.com/photo/2023/01/22/16/16/statue-of-liberty-7736796_1280.jpg?auto=format&fit=crop&w=800&h=400',
      demoLink: 'https://github.com/michelleraj/GoDaddy-Microbusiness-Density',
      codeLink: 'https://github.com/michelleraj/GoDaddy-Microbusiness-Density/blob/main/Godaddy_Microbusiness.sql'
    },
    {
      id: 3,
      title: 'NYC-CitiBike-Tableau',
      description: 'Analyzed 3+ million rides uncovering the pulse of New York City’s bike culture using Tableau.',
      tools: ['Tableau', 'Python'],
      category: 'Visualization',
      image: 'https://cdn.pixabay.com/photo/2020/12/08/02/35/broadway-5813302_1280.jpg?auto=format&fit=crop&w=800&h=400',
      demoLink: 'https://public.tableau.com/app/profile/michelle.raj/viz/NYCCITITRIP/Dashboard2',
      codeLink: 'https://github.com/michelleraj/NYC-CitiBike-Tableau'
    },
    {
      id: 4,
      title: 'Credit Risk Analysis',
      description: 'Predictive analytics project focused on improving credit risk classification using imbalanced data techniques',
      tools: ['Python','Imbalanced Classification'],
      category: 'Finance',
      image: 'https://cdn.pixabay.com/photo/2019/10/01/14/18/growth-4518406_1280.jpg?auto=format&fit=crop&w=800&h=400',
      demoLink: 'https://github.com/michelleraj/Credit-Risk-Analysis/',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Heart Disease Prediction',
      description: 'Project aims to predict heart disease using patient health records from the Kaggle Heart Disease dataset.',
      tools: ['Python', 'Kaggle', 'Machine Learning'],
      category: 'Healthcare',
      image: 'https://cdn.pixabay.com/photo/2017/08/07/19/53/heart-2607178_1280.jpg?auto=format&fit=crop&w=800&h=400',
      demoLink: 'https://github.com/michelleraj/Heart-Disease-Prediction',
      codeLink: '#'
    },
  
    {
      id: 6,
      title: 'Belly Biodiversity Visualization',
      description: 'Iinteractive dashboard visualizes microbial data sampled from the navels of individuals .',
      tools: ['HTML', 'JavaScript', 'Plotly', 'FDA Standards'],
      category: 'Visualization',
      image: 'https://cdn.pixabay.com/photo/2017/02/01/13/53/analysis-2030265_1280.jpg?auto=format&fit=crop&w=800&h=400',
      demoLink: 'https://belly-biodiversity-analysis.netlify.app/',
      codeLink: 'https://github.com/michelleraj/Belly-Button-Biodiversity'
    },
  
  ];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of data visualization and analytics projects transforming complex data into actionable insights
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="h-5 w-5 text-muted-foreground self-center mr-2" />
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilter === filter ? "default" : "outline"}
              onClick={() => setSelectedFilter(filter)}
              className={selectedFilter === filter ? "bg-gradient-primary" : ""}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="bg-gradient-card shadow-card hover:shadow-soft transition-all duration-300 group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="secondary" className="ml-2 shrink-0">
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <Badge key={tool} variant="outline" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                  {project.tools.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tools.length - 3}
                    </Badge>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-3">
                <Button asChild size="sm" className="flex-1 bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="sm">
                  <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        
      </div>
    </div>
  );
};

export default Portfolio;