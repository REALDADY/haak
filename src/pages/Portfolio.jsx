import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'Argreen Website',
      category: 'Web Development',
      description: 'Modern, responsive website showcasing sustainable and eco-friendly solutions.',
      link: 'https://realdady.github.io/argreen/',
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Full-featured online store with payment integration',
      link: '#',
    },
    {
      title: 'Brand Identity Design',
      category: 'Marketing',
      description: 'Complete rebranding for a startup company',
      link: '#',
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
          <h1 className="text-5xl font-bold text-black mb-4">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects and success stories
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-sky-400 to-yellow-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <span className="text-sm text-yellow-500 font-semibold">{project.category}</span>
                <h3 className="text-2xl font-bold text-black mb-3 mt-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                {project.link !== '#' && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
