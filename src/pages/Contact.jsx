import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_wgkm2lf',
      'template_kcigxb8',
      form.current,
      '3voch5UuQ5xAks-I0'
    )
      .then((result) => {
          console.log(result.text);
          setLoading(false);
          form.current.reset();
          alert('Message sent successfully! We will get back to you soon.');
      }, (error) => {
          console.log(error.text);
          setLoading(false);
          alert('Failed to send message. Please try again or email us directly at amijbari8@gmail.com');
      });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-black mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-black mb-6">Get in Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <HiMail className="text-yellow-500 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Email</h3>
                  <p className="text-gray-600">amijbari8@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HiPhone className="text-yellow-500 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Phone</h3>
                  <p className="text-gray-600">+971 XXX XXX XXX</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HiLocationMarker className="text-yellow-500 text-2xl mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-black">Location</h3>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form ref={form} onSubmit={sendEmail} className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  name="title"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-yellow-500 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
