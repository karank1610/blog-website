import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaUser, FaCommentDots } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'hello@blogspace.com',
      href: 'mailto:hello@blogspace.com',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Address',
      value: '123 Tech Street, San Francisco, CA 94102',
      href: '#',
    },
  ];

  return (
    <div className="contactpage-main min-h-screen bg-gray-50 py-16">
      <div className="contactpage-container max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="contactpage-header text-center mb-16">
          <h1 className="contactpage-title text-4xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="contactpage-subtitle text-lg text-gray-500 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We would love to hear from you.
          </p>
        </div>

        <div className="contactpage-content grid grid-cols-3 gap-12">
          
          {/* Contact Info Sidebar */}
          <div className="contactpage-info-section col-span-1">
            <div className="contactpage-info-card bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="contactpage-info-title text-xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="contactpage-info-list space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="contactpage-info-item flex items-start gap-4 group"
                  >
                    <div className="contactpage-info-icon-wrapper flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <info.icon className="contactpage-info-icon h-5 w-5" />
                    </div>
                    <div className="contactpage-info-content">
                      <p className="contactpage-info-label text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="contactpage-info-value text-sm font-medium text-gray-700 group-hover:text-indigo-600 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Working Hours */}
              <div className="contactpage-hours mt-8 pt-8 border-t border-gray-100">
                <h3 className="contactpage-hours-title text-sm font-semibold text-gray-900 mb-4">
                  Working Hours
                </h3>
                <div className="contactpage-hours-list space-y-2">
                  <div className="contactpage-hours-item flex justify-between text-sm">
                    <span className="contactpage-hours-day text-gray-500">Monday - Friday</span>
                    <span className="contactpage-hours-time text-gray-700 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="contactpage-hours-item flex justify-between text-sm">
                    <span className="contactpage-hours-day text-gray-500">Saturday</span>
                    <span className="contactpage-hours-time text-gray-700 font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="contactpage-hours-item flex justify-between text-sm">
                    <span className="contactpage-hours-day text-gray-500">Sunday</span>
                    <span className="contactpage-hours-time text-gray-700 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contactpage-form-section col-span-2">
            <div className="contactpage-form-card bg-white rounded-xl border border-gray-200 p-8">
              {isSubmitted ? (
                <div className="contactpage-success flex flex-col items-center justify-center py-12 text-center">
                  <FaCheckCircle className="contactpage-success-icon h-16 w-16 text-green-500 mb-4" />
                  <h2 className="contactpage-success-title text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h2>
                  <p className="contactpage-success-text text-gray-500 mb-6">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                  <button
                    className="contactpage-success-btn px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="contactpage-form-title text-xl font-bold text-gray-900 mb-6">
                    Send us a Message
                  </h2>
                  
                  <form className="contactpage-form space-y-5" onSubmit={handleSubmit}>
                    
                    {/* Name & Email Row */}
                    <div className="contactpage-form-row grid grid-cols-2 gap-5">
                      <div className="contactpage-name-field">
                        <label
                          htmlFor="name"
                          className="contactpage-name-label block text-sm font-medium text-gray-700 mb-2"
                        >
                          Your Name
                        </label>
                        <div className="contactpage-name-input-wrapper relative">
                          <FaUser className="contactpage-name-input-icon absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`contactpage-name-input w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                              errors.name ? 'border-red-300 bg-red-50' : 'border-gray-200'
                            }`}
                          />
                        </div>
                        {errors.name && (
                          <p className="contactpage-name-error text-xs text-red-500 mt-1">
                            {errors.name}
                          </p>
                        )}
                      </div>

                      <div className="contactpage-email-field">
                        <label
                          htmlFor="email"
                          className="contactpage-email-label block text-sm font-medium text-gray-700 mb-2"
                        >
                          Email Address
                        </label>
                        <div className="contactpage-email-input-wrapper relative">
                          <FaEnvelope className="contactpage-email-input-icon absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`contactpage-email-input w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                              errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200'
                            }`}
                          />
                        </div>
                        {errors.email && (
                          <p className="contactpage-email-error text-xs text-red-500 mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="contactpage-subject-field">
                      <label
                        htmlFor="subject"
                        className="contactpage-subject-label block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject
                      </label>
                      <div className="contactpage-subject-input-wrapper relative">
                        <FaCommentDots className="contactpage-subject-input-icon absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          className={`contactpage-subject-input w-full pl-10 pr-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors ${
                            errors.subject ? 'border-red-300 bg-red-50' : 'border-gray-200'
                          }`}
                        />
                      </div>
                      {errors.subject && (
                        <p className="contactpage-subject-error text-xs text-red-500 mt-1">
                          {errors.subject}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="contactpage-message-field">
                      <label
                        htmlFor="message"
                        className="contactpage-message-label block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows="5"
                        className={`contactpage-message-input w-full px-4 py-3 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors ${
                          errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200'
                        }`}
                      />
                      {errors.message && (
                        <p className="contactpage-message-error text-xs text-red-500 mt-1">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                      <div className="contactpage-submit-error p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="contactpage-submit-error-text text-sm text-red-600 text-center">
                          {errors.submit}
                        </p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="contactpage-submit-btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="contactpage-spinner h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span className="contactpage-loading-text">Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="contactpage-submit-icon h-4 w-4" />
                          <span className="contactpage-submit-text">Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;