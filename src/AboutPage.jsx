import { FaRocket, FaUsers, FaLightbulb, FaCode, FaGithub, FaEnvelope } from 'react-icons/fa';

const AboutPage = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Built with modern technologies to ensure lightning-fast load times and smooth user experience.',
    },
    {
      icon: FaUsers,
      title: 'Community Driven',
      description: 'A platform built for developers, by developers. Share knowledge and grow together.',
    },
    {
      icon: FaLightbulb,
      title: 'Innovative Ideas',
      description: 'Explore cutting-edge concepts and stay ahead of the curve with our curated content.',
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Every article is crafted with attention to detail and best practices in mind.',
    },
  ];

  const team = [
    {
      name: 'John Doe',
      role: 'Founder & Lead Developer',
      bio: 'Full-stack developer with 10+ years of experience building scalable web applications.',
    },
    {
      name: 'Jane Smith',
      role: 'Content Strategist',
      bio: 'Tech writer and community manager passionate about making complex topics accessible.',
    },
    {
      name: 'Mike Johnson',
      role: 'Backend Engineer',
      bio: 'Database architect specializing in MongoDB and Node.js performance optimization.',
    },
  ];

  return (
    <div className="aboutpage-main min-h-screen bg-white">
      
      {/* Hero Section */}
      <section className="aboutpage-hero bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="aboutpage-hero-container max-w-4xl mx-auto px-8 text-center">
          <h1 className="aboutpage-hero-title text-5xl font-bold mb-6">
            About BlogSpace
          </h1>
          <p className="aboutpage-hero-description text-lg text-indigo-100 leading-relaxed max-w-2xl mx-auto">
            We are a community of passionate developers sharing knowledge, insights, and experiences to help others grow in their tech journey.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="aboutpage-mission py-16">
        <div className="aboutpage-mission-container max-w-4xl mx-auto px-8 text-center">
          <h2 className="aboutpage-mission-title text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="aboutpage-mission-text text-lg text-gray-600 leading-relaxed">
            At BlogSpace, we believe that knowledge should be freely shared and accessible to everyone. 
            Our mission is to create a platform where developers can learn, teach, and collaborate 
            on the latest technologies and best practices in web development.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="aboutpage-features bg-gray-50 py-16">
        <div className="aboutpage-features-container max-w-7xl mx-auto px-8">
          <h2 className="aboutpage-features-title text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose BlogSpace
          </h2>
          <div className="aboutpage-features-grid grid grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="aboutpage-feature-item text-center p-6 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="aboutpage-feature-icon-wrapper inline-flex items-center justify-center h-14 w-14 rounded-full bg-indigo-100 text-indigo-600 mb-4">
                  <feature.icon className="aboutpage-feature-icon h-7 w-7" />
                </div>
                <h3 className="aboutpage-feature-title text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="aboutpage-feature-description text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="aboutpage-team py-16">
        <div className="aboutpage-team-container max-w-7xl mx-auto px-8">
          <h2 className="aboutpage-team-title text-3xl font-bold text-gray-900 text-center mb-12">
            Meet the Team
          </h2>
          <div className="aboutpage-team-grid grid grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="aboutpage-team-member text-center p-8 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="aboutpage-team-avatar flex items-center justify-center h-20 w-20 rounded-full bg-indigo-100 text-indigo-600 mx-auto mb-4">
                  <span className="aboutpage-team-avatar-text text-2xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="aboutpage-team-name text-lg font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="aboutpage-team-role text-sm text-indigo-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="aboutpage-team-bio text-sm text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="aboutpage-tech bg-gray-50 py-16">
        <div className="aboutpage-tech-container max-w-4xl mx-auto px-8 text-center">
          <h2 className="aboutpage-tech-title text-3xl font-bold text-gray-900 mb-6">
            Built With Modern Tech
          </h2>
          <p className="aboutpage-tech-description text-lg text-gray-600 mb-8">
            Our platform is powered by industry-leading technologies to deliver the best experience.
          </p>
          <div className="aboutpage-tech-stack flex items-center justify-center gap-6 flex-wrap">
            {['React.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Express.js', 'JWT Auth'].map((tech) => (
              <span
                key={tech}
                className="aboutpage-tech-item px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="aboutpage-cta bg-indigo-600 py-16">
        <div className="aboutpage-cta-container max-w-4xl mx-auto px-8 text-center">
          <h2 className="aboutpage-cta-title text-3xl font-bold text-white mb-4">
            Want to Collaborate?
          </h2>
          <p className="aboutpage-cta-description text-lg text-indigo-100 mb-8">
            We are always looking for passionate writers and contributors to join our community.
          </p>
          <div className="aboutpage-cta-buttons flex items-center justify-center gap-4">
            <a
              href="mailto:hello@blogspace.com"
              className="aboutpage-cta-email flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              <FaEnvelope className="aboutpage-cta-email-icon h-4 w-4" />
              Get in Touch
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="aboutpage-cta-github flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
            >
              <FaGithub className="aboutpage-cta-github-icon h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;