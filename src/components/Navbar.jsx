import { Link, useLocation } from 'react-router-dom';
import { FaPenSquare, FaSignInAlt, FaSignOutAlt, FaUser, FaTachometerAlt } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  
  const isAuthenticated = false;
  const isAdmin = false;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar-main sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="navbar-container max-w-7xl mx-auto px-8">
        <div className="navbar-inner flex items-center justify-between h-16">
          
          <div className="navbar-logo-section shrink-0">
            <Link to="/" className="navbar-logo-link flex items-center gap-2">
              <FaPenSquare className="navbar-logo-icon h-6 w-6 text-indigo-600" />
              <span className="navbar-logo-text text-xl font-bold text-gray-900">
                BlogSpace
              </span>
            </Link>
          </div>

          <div className="navbar-desktop-links flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`navbar-desktop-link text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'navbar-desktop-link-active text-indigo-600'
                    : 'navbar-desktop-link-inactive text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="navbar-desktop-auth flex items-center gap-4">
            {isAuthenticated ? (
              <>
                {isAdmin && (
                  <Link
                    to="/admin"
                    className="navbar-admin-link flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <FaTachometerAlt className="navbar-admin-icon h-4 w-4" />
                    Dashboard
                  </Link>
                )}
                <button
                  className="navbar-logout-btn flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                >
                  <FaSignOutAlt className="navbar-logout-icon h-4 w-4" />
                  Logout
                </button>
                <div className="navbar-user-avatar flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600">
                  <FaUser className="navbar-user-icon h-4 w-4" />
                </div>
              </>
            ) : (
              <Link
                to="/login"
                className="navbar-login-btn flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                <FaSignInAlt className="navbar-login-icon h-4 w-4" />
                Admin Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;