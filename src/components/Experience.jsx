import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Social Media Strategist',
      company: 'Notification Agency',
      period: 'Nov 2024 – Mar 2025',
      description: 'Oversaw strategic content and paid campaign planning for diverse clients. Aligned creative direction with business goals to enhance ad effectiveness.',
      achievements: [
        'Achieved up to 40% boost in ad performance',
        'A/B testing and creative optimization',
        'Strategic content development'
      ]
    },
    {
      title: 'Social Media Marketing Manager',
      company: 'United EGY for Construction & Finishing',
      period: 'Mar 2024 – Nov 2024',
      description: 'Planned and executed paid ad campaigns on Facebook, TikTok, and Google. Led content and creative direction across all platforms.',
      achievements: [
        'Increased traffic and lead generation significantly',
        'Refined audience targeting and boosted ROI',
        'Cross-platform campaign management'
      ]
    },
    {
      title: 'Freelancer',
      company: 'Media Buyer & Social Specialist',
      period: 'Jul 2021 – Present',
      description: 'Designed and managed paid ad campaigns for clients in Egypt and GCC, achieving up to 8x ROAS.',
      achievements: [
        'Up to 8x ROAS achievement',
        'Budgets from $300 to $10,000/month',
        'Full-funnel advertising strategies',
        'Influencer collaborations'
      ]
    }
  ];

  const certifications = [
    'Google Digital Marketing Certification',
    'Udacity Digital Marketing Nanodegree',
    'LinkedIn Marketing Course',
    'Diploma in Digital & Strategic Marketing – Presidents of Market'
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold brand-navy mb-4 font-poppins">
            Experience
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A professional journey equipped with diverse skills and deep understanding 
            of the digital marketing landscape.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover-reveal">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 brand-blue" />
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold brand-navy mb-1 font-poppins">
                      {exp.title}
                    </h3>
                    <p className="text-brand-blue font-medium mb-3">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="w-6 h-6 brand-blue" />
            <h3 className="text-2xl font-bold brand-navy font-poppins">
              Certifications
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

