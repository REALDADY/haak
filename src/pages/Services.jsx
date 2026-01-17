import { motion } from 'framer-motion';
import { HiCode, HiDeviceMobile, HiGlobe, HiPencilAlt, HiChartPie, HiBriefcase } from 'react-icons/hi';

const Services = () => {
  const techServices = [
    {
      icon: <HiGlobe />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Node.js, and more.',
    },
    {
      icon: <HiDeviceMobile />,
      title: 'Mobile Applications',
      description: 'Cross-platform mobile apps that deliver seamless user experiences on iOS and Android.',
    },
    {
      icon: <HiCode />,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to solve your unique business challenges.',
    },
  ];

  const marketingServices = [
    {
      icon: <HiPencilAlt />,
      title: 'Brand Identity',
      description: 'Complete branding packages including logo design, brand guidelines, and visual identity.',
    },
    {
      icon: <HiChartPie />,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns across social media, SEO, and content marketing.',
    },
    {
      icon: <HiBriefcase />,
      title: 'Business Strategy',
      description: 'Consulting services to help startups navigate growth and market positioning.',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-haak-black mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology and marketing solutions designed for modern businesses
          </p>
        </motion.div>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-haak-black mb-10 text-center">
            Technology Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-haak-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl text-haak-blue mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-haak-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-haak-black mb-10 text-center">
            Creative Marketing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-haak-yellow hover:shadow-lg transition-all duration-300"
              >
                <div className="text-5xl text-haak-yellow mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-haak-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
