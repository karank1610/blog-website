import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaArrowLeft } from 'react-icons/fa';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // TODO: Replace with actual API call
    try {
      console.log('Login attempt:', formData);
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      // TODO: Store JWT token, update auth context, redirect to admin dashboard
    } catch (error) {
      setErrors({ submit: 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="loginpage-main min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="loginpage-container max-w-md w-full mx-4">
        
        {/* Back Link */}
        <Link
          to="/"
          className="loginpage-back-link inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <FaArrowLeft className="loginpage-back-icon h-4 w-4" />
          Back to Home
        </Link>

        {/* Login Card */}
        <div className="loginpage-card bg-white rounded-xl border border-gray-200 shadow-sm p-8">
          
          {/* Header */}
          <div className="loginpage-header text-center mb-8">
            <div className="loginpage-icon-wrapper inline-flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-indigo-600 mb-4">
              <FaSignInAlt className="loginpage-icon h-6 w-6" />
            </div>
            <h1 className="loginpage-title text-2xl font-bold text-gray-900 mb-2">
              Admin Login
            </h1>
            <p className="loginpage-subtitle text-sm text-gray-500">
              Sign in to manage your blog content
            </p>
          </div>

          {/* Form */}
          <form className="loginpage-form space-y-5" onSubmit={handleSubmit}>
            
            {/* Email Field */}
            <div className="loginpage-email-field">
              <label
                htmlFor="email"
                className="loginpage-email-label block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="loginpage-email-input-wrapper relative">
                <FaEnvelope className="loginpage-email-input-icon absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="admin@blogspace.com"
                  className={`loginpage-email-input w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                />
              </div>
              {errors.email && (
                <p className="loginpage-email-error text-xs text-red-500 mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="loginpage-password-field">
              <label
                htmlFor="password"
                className="loginpage-password-label block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="loginpage-password-input-wrapper relative">
                <FaLock className="loginpage-password-input-icon absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className={`loginpage-password-input w-full pl-10 pr-12 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                    errors.password ? 'border-red-300 bg-red-50' : 'border-gray-200'
                  }`}
                />
                <button
                  type="button"
                  className="loginpage-password-toggle absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaEyeSlash className="loginpage-password-toggle-icon h-4 w-4" />
                  ) : (
                    <FaEye className="loginpage-password-toggle-icon h-4 w-4" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="loginpage-password-error text-xs text-red-500 mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Submit Error */}
            {errors.submit && (
              <div className="loginpage-submit-error p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="loginpage-submit-error-text text-sm text-red-600 text-center">
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="loginpage-submit-btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="loginpage-spinner h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span className="loginpage-loading-text">Signing in...</span>
                </>
              ) : (
                <>
                  <FaSignInAlt className="loginpage-submit-icon h-4 w-4" />
                  <span className="loginpage-submit-text">Sign In</span>
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="loginpage-divider flex items-center gap-4 my-6">
            <div className="loginpage-divider-line grow h-px bg-gray-200" />
            <span className="loginpage-divider-text text-xs text-gray-400 uppercase">
              Admin Only
            </span>
            <div className="loginpage-divider-line grow h-px bg-gray-200" />
          </div>

          {/* Info */}
          <div className="loginpage-info text-center">
            <p className="loginpage-info-text text-xs text-gray-400">
              This login is restricted to blog administrators only.
            </p>
            <p className="loginpage-info-text-2 text-xs text-gray-400 mt-1">
              Regular users can browse blogs without signing in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;