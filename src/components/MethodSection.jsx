import discoverIcon from '../assets/discover_icon_placeholder.png';
import architectIcon from '../assets/architect_icon_placeholder.png';
import launchIcon from '../assets/launch_icon_placeholder.png';
import optimizeIcon from '../assets/optimize_icon_placeholder.png';

const MethodSection = () => {
  const methods = [
    {
      id: 1,
      title: 'Discover',
      description: 'Thoroughly research your business, target audience, and market landscape to identify unique opportunities and challenges.',
      icon: discoverIcon
    },
    {
      id: 2,
      title: 'Architect',
      description: 'Develop a tailored strategy and comprehensive media plan, outlining campaign structure, targeting parameters, and creative concepts.',
      icon: architectIcon
    },
    {
      id: 3,
      title: 'Launch',
      description: 'Execute campaigns with precision, ensuring optimal setup, ad delivery, and initial performance monitoring.',
      icon: launchIcon
    },
    {
      id: 4,
      title: 'Optimize',
      description: 'Continuously analyze data, conduct A/B tests, and refine campaigns to maximize ROAS, improve efficiency, and achieve sustained growth.',
      icon: optimizeIcon
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold brand-navy mb-4 font-poppins">
            My Growth Methodology
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A systematic and results-oriented approach built on a proven four-step methodology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, index) => (
            <div key={method.id} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300">
                  <img 
                    src={method.icon} 
                    alt={method.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                {index < methods.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
                )}
              </div>
              
              <h3 className="text-xl font-bold brand-navy mb-3 font-poppins">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;

