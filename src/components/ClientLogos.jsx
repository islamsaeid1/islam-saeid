const ClientLogos = () => {
  const clients = [
    'El Sheby',
    'King Shawerma', 
    'WOODY',
    'Yahya El Attar',
    'United EGY',
    '360 Ballons'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold brand-navy mb-4 font-poppins">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 text-lg">
            Partnering with businesses across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <div className="text-center">
                <div className="text-lg font-semibold brand-slate">
                  {client}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;

