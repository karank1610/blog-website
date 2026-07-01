import { Link } from 'react-router-dom';
import { FaArrowRight, FaPenSquare, FaUsers, FaHeart, FaRegClock } from 'react-icons/fa';
import BlogCard from './components/BlogCard';

const HomePage = () => {
  // TODO: Replace with actual API data
  const featuredBlogs = [
    {
      _id: '1',
      title: 'Getting Started with React and Modern Web Development',
      slug: 'getting-started-with-react',
      description: 'Learn the fundamentals of React and how to build modern web applications with the latest tools and techniques.',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800',
        thumbnail: '',
      },
      author: { username: 'John Doe' },
      createdAt: '2026-06-15T10:00:00Z',
      likesCount: 42,
      commentsCount: 8,
      tags: ['React', 'Web Development', 'JavaScript'],
    },
    {
      _id: '2',
      title: 'Mastering MongoDB: Tips and Best Practices',
      slug: 'mastering-mongodb',
      description: 'Deep dive into MongoDB performance optimization, schema design patterns, and advanced querying techniques.',
      media: {
        type: 'video',
        url: 'https://example.com/video.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      },
      author: { username: 'Jane Smith' },
      createdAt: '2026-06-20T14:00:00Z',
      likesCount: 28,
      commentsCount: 5,
      tags: ['MongoDB', 'Database', 'Backend'],
    },
    {
      _id: '3',
      title: 'Building Scalable APIs with Node.js',
      slug: 'building-scalable-apis',
      description: 'A comprehensive guide to designing and implementing RESTful APIs that can handle millions of requests.',
      media: {
        type: 'url',
        url: 'https://nodejs.org/en/docs/',
        thumbnail: '',
      },
      author: { username: 'Mike Johnson' },
      createdAt: '2026-06-25T09:00:00Z',
      likesCount: 56,
      commentsCount: 12,
      tags: ['Node.js', 'API', 'Backend'],
    },
  ];

  const recentBlogs = [
    {
      _id: '4',
      title: 'CSS Grid vs Flexbox: When to Use What',
      slug: 'css-grid-vs-flexbox',
      description: 'Understanding the differences between CSS Grid and Flexbox and when to choose one over the other.',
      media: {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800',
        thumbnail: '',
      },
      author: { username: 'Sarah Wilson' },
      createdAt: '2026-06-28T16:00:00Z',
      likesCount: 35,
      commentsCount: 7,
      tags: ['CSS', 'Frontend', 'Design'],
    },
    {
      _id: '5',
      title: 'The Future of AI in Web Development',
      slug: 'future-of-ai-web-development',
      description: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
      media: {
        type: 'gif',
        url: 'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDdtZzV3b3R0Z3J1Z2h0b3V0Z2lmdGVzdGluZzIwMjYwNzAxMjE1NjAw.gif',
        thumbnail: '',
      },
      author: { username: 'David Lee' },
      createdAt: '2026-07-01T11:00:00Z',
      likesCount: 89,
      commentsCount: 23,
      tags: ['AI', 'Future Tech', 'Web Development'],
    },
    {
      _id: '6',
      title: 'Authentication Patterns in Modern Apps',
      slug: 'authentication-patterns',
      description: 'Comparing JWT, OAuth, and session-based authentication for your next project.',
      media: null,
      author: { username: 'Emma Brown' },
      createdAt: '2026-07-01T18:00:00Z',
      likesCount: 15,
      commentsCount: 3,
      tags: ['Security', 'Authentication', 'JWT'],
    },
  ];

  const stats = [
    { icon: FaPenSquare, label: 'Total Blogs', value: '150+' },
    { icon: FaUsers, label: 'Active Readers', value: '2.5K' },
    { icon: FaHeart, label: 'Total Likes', value: '10K+' },
    { icon: FaRegClock, label: 'Published Weekly', value: '5+' },
  ];

  return (
    <div className="homepage-main">
      {/* Hero Section */}
      <section className="homepage-hero bg-linear-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="homepage-hero-container max-w-7xl mx-auto px-8">
          <div className="homepage-hero-content max-w-2xl">
            <h1 className="homepage-hero-title text-5xl font-bold mb-6 leading-tight">
              Discover Stories That Matter
            </h1>
            <p className="homepage-hero-description text-lg text-indigo-100 mb-8 leading-relaxed">
              Explore insightful articles on web development, technology trends, and programming best practices. Join our community of passionate developers.
            </p>
            <div className="homepage-hero-buttons flex gap-4">
              <Link
                to="/blogs"
                className="homepage-hero-primary-btn flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Explore Blogs
                <FaArrowRight className="homepage-hero-primary-icon h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="homepage-hero-secondary-btn flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors"
              >
                <FaPenSquare className="homepage-hero-secondary-icon h-4 w-4" />
                Write a Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="homepage-stats bg-white py-12 border-b border-gray-200">
        <div className="homepage-stats-container max-w-7xl mx-auto px-8">
          <div className="homepage-stats-grid grid grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="homepage-stat-item flex items-center gap-4 p-6 bg-gray-50 rounded-xl"
              >
                <div className="homepage-stat-icon-wrapper flex items-center justify-center h-12 w-12 rounded-lg bg-indigo-100 text-indigo-600">
                  <stat.icon className="homepage-stat-icon h-6 w-6" />
                </div>
                <div className="homepage-stat-content">
                  <p className="homepage-stat-value text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="homepage-stat-label text-sm text-gray-500">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="homepage-featured bg-gray-50 py-16">
        <div className="homepage-featured-container max-w-7xl mx-auto px-8">
          <div className="homepage-featured-header flex items-center justify-between mb-10">
            <div className="homepage-featured-title-wrapper">
              <h2 className="homepage-featured-title text-3xl font-bold text-gray-900 mb-2">
                Featured Blogs
              </h2>
              <p className="homepage-featured-subtitle text-gray-500">
                Handpicked articles from our top contributors
              </p>
            </div>
            <Link
              to="/blogs"
              className="homepage-featured-view-all flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View All Blogs
              <FaArrowRight className="homepage-featured-view-all-icon h-4 w-4" />
            </Link>
          </div>
          <div className="homepage-featured-grid grid grid-cols-3 gap-6">
            {featuredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blogs Section */}
      <section className="homepage-recent bg-white py-16">
        <div className="homepage-recent-container max-w-7xl mx-auto px-8">
          <div className="homepage-recent-header flex items-center justify-between mb-10">
            <div className="homepage-recent-title-wrapper">
              <h2 className="homepage-recent-title text-3xl font-bold text-gray-900 mb-2">
                Recent Blogs
              </h2>
              <p className="homepage-recent-subtitle text-gray-500">
                Fresh content published by our community
              </p>
            </div>
            <Link
              to="/blogs"
              className="homepage-recent-view-all flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              View All Blogs
              <FaArrowRight className="homepage-recent-view-all-icon h-4 w-4" />
            </Link>
          </div>
          <div className="homepage-recent-grid grid grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="homepage-cta bg-indigo-600 py-16">
        <div className="homepage-cta-container max-w-4xl mx-auto px-8 text-center">
          <h2 className="homepage-cta-title text-3xl font-bold text-white mb-4">
            Ready to Share Your Story?
          </h2>
          <p className="homepage-cta-description text-lg text-indigo-100 mb-8 leading-relaxed">
            Join our community of writers and start publishing your thoughts, tutorials, and insights today.
          </p>
          <Link
            to="/login"
            className="homepage-cta-btn inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <FaPenSquare className="homepage-cta-icon h-5 w-5" />
            Start Writing Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;