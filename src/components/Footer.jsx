import { Link } from 'react-router-dom';
import { FaPenSquare, FaGlobe, FaComments, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { name: 'Home', path: '/' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Cookie Policy', path: '#' },
    ],
    social: [
      { name: 'Website', icon: FaGlobe, url: '#' },
      { name: 'Community', icon: FaComments, url: '#' },
      { name: 'Email', icon: FaEnvelope, url: '#' },
    ],
  };

  return (
    <footer className="footer-main bg-gray-900 text-gray-300">
      <div className="footer-container max-w-7xl mx-auto px-8 py-12">
        <div className="footer-inner grid grid-cols-4 gap-8">
          
          <div className="footer-brand-section col-span-1">
            <Link to="/" className="footer-brand-link flex items-center gap-2 mb-4">
              <FaPenSquare className="footer-brand-icon h-6 w-6 text-indigo-400" />
              <span className="footer-brand-text text-xl font-bold text-white">
                BlogSpace
              </span>
            </Link>
            <p className="footer-brand-description text-sm text-gray-400 leading-relaxed">
              A modern blogging platform where ideas come to life. Share your stories, engage with readers, and build your audience.
            </p>
          </div>

          <div className="footer-platform-section">
            <h3 className="footer-platform-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="footer-platform-list space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name} className="footer-platform-item">
                  <Link
                    to={link.path}
                    className="footer-platform-link text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-legal-section">
            <h3 className="footer-legal-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="footer-legal-list space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name} className="footer-legal-item">
                  <Link
                    to={link.path}
                    className="footer-legal-link text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-social-section">
            <h3 className="footer-social-heading text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="footer-social-links flex gap-4">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="footer-social-link flex items-center justify-center h-10 w-10 rounded-lg bg-gray-800 text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors"
                  title={link.name}
                >
                  <link.icon className="footer-social-icon h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-12 pt-8 border-t border-gray-800">
          <div className="footer-bottom-inner flex items-center justify-between">
            <p className="footer-copyright text-sm text-gray-500">
              {currentYear} BlogSpace. All rights reserved.
            </p>
            <p className="footer-made-with flex items-center gap-1 text-sm text-gray-500">
              Made with <FaHeart className="footer-heart-icon h-4 w-4 text-red-500" /> by BlogSpace Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;