import { Card, CardContent } from './ui/card';
import { Target, Zap, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Clarity',
      description: 'Simple, clear offers are the most effective. My strategies cut through the noise and communicate your value proposition directly.'
    },
    {
      icon: Zap,
      title: 'Momentum',
      description: 'Launch quickly and learn even faster. I advocate for agile strategies that allow for rapid iteration and continuous improvement.'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Your ad spend is hard-earned money, and I treat it with the utmost respect, as if it were my own.'
    }
  ];

  const stats = [
    { label: 'Experience', value: '3+ years' },
    { label: 'ROAS', value: 'Up to 8x' },
    { label: 'Sectors', value: '8+ verticals' },
    { label: 'Markets', value: 'Egypt & GCC' }
  ];

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold brand-navy mb-4 font-poppins">
            About Islam Saeid
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter">
            I'm Islam Saeid — a performance-focused media buyer and social strategist. 
            I build funnels that respect your budget and your audience's attention.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover-reveal">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 brand-blue" />
                </div>
                <h3 className="text-xl font-bold brand-navy mb-3 font-poppins">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold brand-navy text-center mb-8 font-poppins">
            By The Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold brand-blue mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h4 className="font-semibold brand-navy mb-2">Languages</h4>
              <p className="text-gray-600">
                Arabic (native), English (conversational), French (basic)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

