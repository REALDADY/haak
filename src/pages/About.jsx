import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-haak-black mb-4">About HAAK Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in March 2022, we're dedicated to providing integrated technology and marketing services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl mb-8"
          >
            <h2 className="text-3xl font-bold text-haak-black mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              "Hakk" is a traditional Arabic word that means "give you something," reflecting the simplicity 
              and provision of the services we provide. It's also used to inform someone that what they seek is obtainable.
            </p>
            <p className="text-gray-600">
              HAAK is a profitable private B2B company that provides modern, integrated, confidential technology 
              services as well as creative marketing services. Our main goal is to incorporate technical and marketing 
              services in one spot so that we could provide you with the help and support that matches your needs, 
              particularly for startups with restricted knowledge of the industry.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-haak-black mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses, especially startups, by providing integrated technology and marketing 
                solutions that drive growth and success.
              </p>
            </div>
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-haak-black mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of integrated business solutions in the region, known for our 
                expertise, innovation, and client success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
