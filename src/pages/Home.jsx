import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiCode, HiLightningBolt, HiChartBar } from 'react-icons/hi';

const Home = () => {
  const services = [
    {
      icon: <HiCode className="text-5xl text-haak-blue" />,
      title: 'Technology Services',
      description: 'Modern, integrated, and confidential technology solutions tailored to your business needs.',
    },
    {
      icon: <HiLightningBolt className="text-5xl text-haak-yellow" />,
      title: 'Creative Marketing',
      description: 'Innovative marketing strategies that drive growth and elevate your brand presence.',
    },
    {
      icon: <HiChartBar className="text-5xl text-haak-dark-blue" />,
      title: 'Business Growth',
      description: 'Comprehensive support for startups to scale efficiently with expert guidance.',
    },
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-haak-black mb-6 leading-tight">
                Give Your Business <span className="text-haak-yellow">What It Needs</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Integrated technology and creative marketing services in one place. 
                We provide modern solutions that match your needs, especially for startups 
                with restricted industry knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services"
                  className="bg-haak-yellow text-haak-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Explore Services
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-haak-black text-haak-black px-8 py-4 rounded-lg font-semibold hover:bg-haak-black hover:text-white transition-all duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="w-96 h-96 bg-gradient-to-br from-haak-blue to-haak-yellow opacity-20 rounded-full blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-haak-black mb-4">
              What We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since March 2022, HAAK Solutions has been delivering integrated services 
              that combine technical expertise with creative marketing excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-haak-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-haak-blue to-haak-dark-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white mb-8 opacity-90">
              Let's discuss how HAAK Solutions can help you achieve your goals.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-haak-yellow text-haak-black px-10 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
