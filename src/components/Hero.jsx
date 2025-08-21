import { Button } from './ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold brand-navy mb-6 font-poppins leading-tight">
            Media Buyer & Social Media Strategist Who{' '}
            <span className="brand-blue">Turns Ad Spend into Growth</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto font-inter">
            3+ years driving results on Meta, TikTok, and Google for F&B, retail, interiors, 
            and services across Egypt & the GCC — up to <span className="font-bold brand-blue">8x ROAS</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              View Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white px-8 py-3 text-lg"
            >
              Book a Strategy Call
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold brand-navy mb-2">$300-$10K</div>
              <div className="text-gray-600">Monthly Budgets</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold brand-navy mb-2">8x</div>
              <div className="text-gray-600">Best ROAS</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold brand-navy mb-2">8+</div>
              <div className="text-gray-600">Industries</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold brand-navy mb-2">3</div>
              <div className="text-gray-600">Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

