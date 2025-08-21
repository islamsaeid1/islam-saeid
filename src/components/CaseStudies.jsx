import { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import woodyImage from '../assets/woody_kitchens_case_study_placeholder.png';
import elshebyImage from '../assets/el_sheby_patisserie_case_study_placeholder.png';
import kingImage from '../assets/king_shawerma_case_study_placeholder.png';
import yahyaImage from '../assets/yahya_el_attar_louloua_roastery_case_study_placeholder.png';
import groskaImage from '../assets/groska_slippers_case_study_placeholder.png';
import checkEngineImage from '../assets/check_engine_garage_case_study_placeholder.png';

const CaseStudies = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const caseStudies = [
    {
      id: 1,
      client: 'WOODY Kitchens',
      category: 'Awareness + Consideration',
      image: woodyImage,
      kpis: {
        reach: '365K+',
        metric: 'Efficient ThruPlays',
        budget: '$2,500/month'
      },
      description: 'Building brand visibility and engaging potential customers in the kitchen interior sector.'
    },
    {
      id: 2,
      client: 'El Sheby Patisserie',
      category: 'Acquisition + Retention',
      image: elshebyImage,
      kpis: {
        reach: 'Low-cost',
        metric: 'Message Starts',
        budget: '$1,800/month'
      },
      description: 'Strategies designed to acquire new customers and foster long-term loyalty.'
    },
    {
      id: 3,
      client: 'King Shawerma',
      category: 'Engagement → Conversions',
      image: kingImage,
      kpis: {
        reach: 'High',
        metric: 'Engagement at Low CPE',
        budget: '$1,200/month'
      },
      description: 'Successfully translated high engagement rates into tangible conversions.'
    },
    {
      id: 4,
      client: 'Yahya El Attar & Louloua Roastery',
      category: 'Mixed Objectives',
      image: yahyaImage,
      kpis: {
        reach: 'Multi-goal',
        metric: 'Campaign Success',
        budget: '$3,000/month'
      },
      description: 'Campaigns addressing awareness, engagement, and conversion goals.'
    },
    {
      id: 5,
      client: 'Groska Slippers',
      category: 'Direct Response',
      image: groskaImage,
      kpis: {
        reach: 'Immediate',
        metric: 'Sales Drive',
        budget: '$900/month'
      },
      description: 'Direct response campaign aimed at driving immediate sales.'
    },
    {
      id: 6,
      client: 'Check Engine Garage',
      category: 'Offer-led DR',
      image: checkEngineImage,
      kpis: {
        reach: 'Offer-driven',
        metric: 'Customer Action',
        budget: '$1,500/month'
      },
      description: 'Offer-driven direct response campaign focusing on immediate customer action.'
    }
  ];

  return (
    <section id="work" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold brand-navy mb-4 font-poppins">
            Featured Case Studies
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore impactful projects where strategic media buying led to significant client success. 
            Hover over each card to reveal key performance indicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card 
              key={study.id}
              className="hover-reveal cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredCard(study.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.client}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {study.category}
                  </Badge>
                </div>
                
                {/* KPI Overlay */}
                {hoveredCard === study.id && (
                  <div className="absolute inset-0 bg-brand-navy/90 flex items-center justify-center text-white p-4 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-2xl font-bold mb-2">{study.kpis.reach}</div>
                      <div className="text-sm mb-2">{study.kpis.metric}</div>
                      <div className="text-xs opacity-80">{study.kpis.budget}</div>
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold brand-navy mb-2 font-poppins">
                  {study.client}
                </h3>
                <p className="text-gray-600 text-sm">
                  {study.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

