import { Card, CardContent } from './ui/card';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Islam translated our offers into content people act on — fast tests, faster learnings.",
      author: "Client Name",
      role: "Marketing Director",
      company: "F&B Company"
    },
    {
      quote: "He treats our budget like his own — always clear on what's working and why.",
      author: "Client Name",
      role: "Business Owner",
      company: "Retail Brand"
    },
    {
      quote: "We finally have a repeatable promo engine.",
      author: "Client Name",
      role: "CEO",
      company: "Interior Design"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold brand-navy mb-4 font-poppins">
            What Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Nothing speaks louder than the success and satisfaction of our clients. 
            Here's what some of them have to say about working with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-reveal">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 brand-blue mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed font-inter">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-full flex items-center justify-center">
                      <span className="text-brand-blue font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold brand-navy">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

