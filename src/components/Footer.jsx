import { Link } from 'react-router-dom';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img src="/logo3.png" alt="HAAK Solutions" className="h-24 mb-4 brightness-0 invert" />
            <p className="text-gray-400 mb-4">
              Integrated technology and creative marketing services for modern businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/ae_haak33258" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/haak.ae/" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-yellow-500 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-yellow-500 transition-colors">About</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-yellow-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Web Development</li>
              <li className="text-gray-400">Mobile Apps</li>
              <li className="text-gray-400">Brand Identity</li>
              <li className="text-gray-400">Digital Marketing</li>
              <li className="text-gray-400">Consulting</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400">
                <HiMail className="mt-1 mr-2 flex-shrink-0" />
                <span>info@Haak-org.com</span>
              </li>
              <li className="flex items-start text-gray-400">
                <HiPhone className="mt-1 mr-2 flex-shrink-0" />
                <span>+971506101263</span>
              </li>
               <li className="flex items-start text-gray-400">
                <HiPhone className="mt-1 mr-2 flex-shrink-0" />
                <span>+971528548692</span>
              </li>
              <li className="flex items-start text-gray-400">
                <HiLocationMarker className="mt-1 mr-2 flex-shrink-0" />
                <span>Dubai,UAE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} HAAK Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
