import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Target, 
  Users, 
  Palette, 
  BarChart3,
  Facebook,
  MessageSquare,
  Search,
  TrendingUp
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Paid Media Buying',
      description: 'Performance-driven advertising across leading platforms with strategic funnel design and optimization.',
      features: [
        'Meta Ads (Facebook & Instagram)',
        'TikTok Ads',
        'Google Ads',
        'Funnel Design',
        'Offer Testing',
        'Retargeting'
      ]
    },
    {
      icon: Users,
      title: 'Social Media Strategy',
      description: 'Building organic presence and fostering engaged communities through strategic content planning.',
      features: [
        'Content Calendars',
        'UGC Integration',
        'Creator Collaborations',
        'Community Management',
        'Brand Voice Development',
        'Engagement Strategies'
      ]
    },
    {
      icon: Palette,
      title: 'Creative Direction',
      description: 'Compelling visuals and persuasive copy that resonate with your target audience.',
      features: [
        'Video-First Ads',
        'Arabic & English Copywriting',
        'Design (Canva, Photoshop)',
        'Brand Guidelines',
        'Creative Testing',
        'Visual Storytelling'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights and transparent tracking for informed decision-making.',
      features: [
        'Pixel/Events Setup',
        'UTM Tagging',
        'Custom Dashboards',
        'A/B Testing',
        'Performance Analysis',
        'ROI Optimization'
      ]
    }
  ];

  const tools = [
    { name: 'Meta Business Suite', icon: Facebook },
    { name: 'TikTok Ads Manager', icon: MessageSquare },
    { name: 'Google Analytics', icon: Search },
    { name: 'SEMrush', icon: TrendingUp },
    { name: 'Ahrefs', icon: Search },
    { name: 'Hootsuite', icon: Users },
    { name: 'Trello', icon: Target }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold brand-navy mb-4 font-poppins">
            Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive digital marketing services designed to elevate your brand, 
            drive conversions, and maximize your online presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover-reveal">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 brand-blue" />
                  </div>
                  <CardTitle className="brand-navy font-poppins">
                    {service.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold brand-navy text-center mb-8 font-poppins">
            Tools of the Trade
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 mx-auto mb-2 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  <tool.icon className="w-6 h-6 brand-slate" />
                </div>
                <div className="text-sm text-gray-600">
                  {tool.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

