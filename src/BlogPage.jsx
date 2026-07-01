import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShareAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaLink,
  FaRegClock,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaPaperPlane,
  FaTrash,
  FaImage,
  FaVideo,
  FaExternalLinkAlt,
} from 'react-icons/fa';

// ============================================
// BLOG MEDIA COMPONENT
// ============================================
const BlogMedia = ({ media, title }) => {
  const [mediaError, setMediaError] = useState(false);

  if (!media?.url || mediaError) {
    return (
      <div className="blogmedia-main flex items-center justify-center h-80 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl">
        <div className="blogmedia-placeholder-content text-center">
          <FaImage className="blogmedia-placeholder-icon h-12 w-12 text-gray-300 mx-auto mb-3" />
          <span className="blogmedia-placeholder-text text-gray-400 text-sm font-medium">
            No Media Available
          </span>
        </div>
      </div>
    );
  }

  if (media.type === 'video') {
    return (
      <div className="blogmedia-main">
        <video
          className="blogmedia-video w-full h-80 object-cover rounded-xl"
          src={media.url}
          poster={media.thumbnail || 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800'}
          controls
          onError={() => setMediaError(true)}
        >
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (media.type === 'url') {
    return (
      <div className="blogmedia-main">
        <a
          href={media.url}
          target="_blank"
          rel="noopener noreferrer"
          className="blogmedia-url-link flex items-center justify-center h-80 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl border-2 border-dashed border-indigo-200 hover:border-indigo-400 transition-colors"
        >
          <div className="blogmedia-url-content text-center">
            <FaExternalLinkAlt className="blogmedia-url-icon h-10 w-10 text-indigo-400 mx-auto mb-3" />
            <span className="blogmedia-url-text text-indigo-600 font-medium">
              Visit External Link
            </span>
          </div>
        </a>
      </div>
    );
  }

  return (
    <div className="blogmedia-main">
      <img
        className="blogmedia-image w-full h-80 object-cover rounded-xl"
        src={media.url}
        alt={title}
        onError={() => setMediaError(true)}
      />
    </div>
  );
};

// ============================================
// LIKE BUTTON COMPONENT
// ============================================
const LikeButton = ({ blogId, initialLikes, initialLiked }) => {
  const [liked, setLiked] = useState(initialLiked || false);
  const [likesCount, setLikesCount] = useState(initialLikes || 0);

  const handleLike = () => {
    if (liked) {
      setLikesCount((prev) => prev - 1);
      setLiked(false);
      // TODO: API call to unlike
    } else {
      setLikesCount((prev) => prev + 1);
      setLiked(true);
      // TODO: API call to like
    }
  };

  return (
    <button
      className="likebutton-main flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200"
      onClick={handleLike}
      style={{
        backgroundColor: liked ? '#fef2f2' : '#f3f4f6',
        color: liked ? '#dc2626' : '#6b7280',
      }}
    >
      {liked ? (
        <FaHeart className="likebutton-icon-filled h-5 w-5 text-red-500" />
      ) : (
        <FaRegHeart className="likebutton-icon-outline h-5 w-5" />
      )}
      <span className="likebutton-count text-sm font-medium">{likesCount}</span>
      <span className="likebutton-label text-sm font-medium">
        {liked ? 'Liked' : 'Like'}
      </span>
    </button>
  );
};

// ============================================
// SHARE BUTTONS COMPONENT
// ============================================
const ShareButtons = ({ blogUrl, blogTitle }) => {
  const [copied, setCopied] = useState(false);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`,
      color: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}&text=${encodeURIComponent(blogTitle)}`,
      color: 'bg-sky-500 hover:bg-sky-600',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`,
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      url: `https://wa.me/?text=${encodeURIComponent(blogTitle + ' ' + blogUrl)}`,
      color: 'bg-green-500 hover:bg-green-600',
    },
  ];

  const copyLink = () => {
    navigator.clipboard.writeText(blogUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="sharebuttons-main">
      <p className="sharebuttons-heading text-sm font-medium text-gray-700 mb-3">
        Share this blog
      </p>
      <div className="sharebuttons-container flex items-center gap-3">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`sharebuttons-link flex items-center justify-center h-10 w-10 rounded-lg text-white transition-colors ${link.color}`}
            title={link.name}
          >
            <link.icon className="sharebuttons-icon h-5 w-5" />
          </a>
        ))}
        <button
          className="sharebuttons-copy-btn flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
          onClick={copyLink}
        >
          <FaLink className="sharebuttons-copy-icon h-4 w-4" />
          <span className="sharebuttons-copy-text text-sm font-medium">
            {copied ? 'Copied!' : 'Copy Link'}
          </span>
        </button>
      </div>
    </div>
  );
};

// ============================================
// COMMENT ITEM COMPONENT
// ============================================
const CommentItem = ({ comment, onDelete }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // TODO: Replace with actual auth context
  const currentUserId = null;
  const isOwner = currentUserId === comment.user?._id;

  return (
    <div className="commentitem-main flex gap-4 py-4 border-b border-gray-100 last:border-0">
      <div className="commentitem-avatar flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600">
        <FaUser className="commentitem-avatar-icon h-5 w-5" />
      </div>
      <div className="commentitem-content flex-grow">
        <div className="commentitem-header flex items-center justify-between mb-1">
          <div className="commentitem-author-info flex items-center gap-2">
            <span className="commentitem-author-name text-sm font-semibold text-gray-900">
              {comment.user?.username || 'Anonymous'}
            </span>
            <span className="commentitem-date text-xs text-gray-500">
              {formatDate(comment.createdAt)}
            </span>
          </div>
          {isOwner && (
            <button
              className="commentitem-delete-btn text-gray-400 hover:text-red-500 transition-colors"
              onClick={() => onDelete(comment._id)}
            >
              <FaTrash className="commentitem-delete-icon h-4 w-4" />
            </button>
          )}
        </div>
        <p className="commentitem-text text-sm text-gray-700 leading-relaxed">
          {comment.content}
        </p>
      </div>
    </div>
  );
};

// ============================================
// COMMENT SECTION COMPONENT
// ============================================
const CommentSection = ({ blogId, comments: initialComments }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      _id: Date.now().toString(),
      content: newComment,
      user: { username: 'You' },
      createdAt: new Date().toISOString(),
    };

    setComments((prev) => [comment, ...prev]);
    setNewComment('');
    // TODO: API call to add comment
  };

  const handleDelete = (commentId) => {
    setComments((prev) => prev.filter((c) => c._id !== commentId));
    // TODO: API call to delete comment
  };

  return (
    <div className="commentsection-main">
      <h3 className="commentsection-heading text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FaComment className="commentsection-heading-icon h-5 w-5 text-indigo-600" />
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form
        className="commentsection-form mb-6"
        onSubmit={handleSubmit}
      >
        <div className="commentsection-input-wrapper flex gap-3">
          <div className="commentsection-avatar flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-indigo-100 text-indigo-600">
            <FaUser className="commentsection-avatar-icon h-5 w-5" />
          </div>
          <div className="commentsection-input-area flex-grow">
            <textarea
              className="commentsection-textarea w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none text-sm"
              rows="3"
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="commentsection-submit-wrapper flex justify-end mt-2">
              <button
                type="submit"
                className="commentsection-submit-btn flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!newComment.trim()}
              >
                <FaPaperPlane className="commentsection-submit-icon h-4 w-4" />
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="commentsection-list">
        {comments.length === 0 ? (
          <div className="commentsection-empty flex flex-col items-center justify-center py-12 text-gray-400">
            <FaComment className="commentsection-empty-icon h-12 w-12 mb-3 opacity-30" />
            <p className="commentsection-empty-text text-sm">
              No comments yet. Be the first to comment!
            </p>
          </div>
        ) : (
          comments.map((comment) => (
            <CommentItem
              key={comment._id}
              comment={comment}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

// ============================================
// BLOG DETAIL COMPONENT
// ============================================
const BlogDetail = ({ blog }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <article className="blogdetail-main">
      {/* Header */}
      <div className="blogdetail-header mb-8">
        <div className="blogdetail-meta-top flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="blogdetail-author flex items-center gap-2">
            <FaUser className="blogdetail-author-icon h-4 w-4" />
            <span className="blogdetail-author-name">{blog.author?.username || 'Admin'}</span>
          </div>
          <div className="blogdetail-date flex items-center gap-2">
            <FaRegClock className="blogdetail-date-icon h-4 w-4" />
            <span className="blogdetail-date-text">{formatDate(blog.createdAt)}</span>
          </div>
        </div>

        <h1 className="blogdetail-title text-4xl font-bold text-gray-900 mb-4 leading-tight">
          {blog.title}
        </h1>

        <p className="blogdetail-description text-lg text-gray-600 leading-relaxed mb-6">
          {blog.description}
        </p>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="blogdetail-tags flex items-center gap-2 flex-wrap">
            <FaTag className="blogdetail-tags-icon h-4 w-4 text-gray-400" />
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="blogdetail-tag px-3 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Media */}
      <div className="blogdetail-media-wrapper mb-8">
        <BlogMedia media={blog.media} title={blog.title} />
      </div>

      {/* Content */}
      <div className="blogdetail-content prose max-w-none mb-8">
        <div
          className="blogdetail-content-text text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Actions Bar */}
      <div className="blogdetail-actions-bar flex items-center justify-between py-6 border-t border-b border-gray-200 mb-8">
        <LikeButton
          blogId={blog._id}
          initialLikes={blog.likesCount}
          initialLiked={false}
        />
        <ShareButtons
          blogUrl={typeof window !== 'undefined' ? window.location.href : ''}
          blogTitle={blog.title}
        />
      </div>

      {/* Comments */}
      <div className="blogdetail-comments-wrapper">
        <CommentSection
          blogId={blog._id}
          comments={blog.comments}
        />
      </div>
    </article>
  );
};

// ============================================
// BLOG LIST COMPONENT
// ============================================
const BlogList = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return (
      <div className="bloglist-empty flex flex-col items-center justify-center py-20 text-gray-400">
        <FaImage className="bloglist-empty-icon h-16 w-16 mb-4 opacity-30" />
        <p className="bloglist-empty-text text-lg font-medium">No blogs found</p>
        <p className="bloglist-empty-subtext text-sm mt-1">Check back later for new content</p>
      </div>
    );
  }

  return (
    <div className="bloglist-main">
      <div className="bloglist-header flex items-center justify-between mb-8">
        <h2 className="bloglist-heading text-2xl font-bold text-gray-900">Latest Blogs</h2>
        <span className="bloglist-count text-sm text-gray-500">{blogs.length} posts</span>
      </div>
      <div className="bloglist-grid grid grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

// ============================================
// BLOG CARD COMPONENT (Inline for BlogList)
// ============================================
const BlogCard = ({ blog }) => {
  const {
    title,
    slug,
    description,
    media,
    author,
    createdAt,
    likesCount,
    commentsCount,
    tags,
  } = blog;

  const [imageError, setImageError] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  const getMediaPreview = () => {
    if (!media?.url || imageError) {
      return (
        <div className="blogcard-media-placeholder flex items-center justify-center h-full bg-linear-to-br from-indigo-50 to-purple-50">
          <FaImage className="blogcard-placeholder-icon h-10 w-10 text-gray-300" />
        </div>
      );
    }

    if (media.type === 'video') {
      return (
        <div className="blogcard-video-wrapper relative h-full">
          <img
            className="blogcard-video-poster w-full h-full object-cover"
            src={media.thumbnail || 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800'}
            alt={title}
            onError={() => setImageError(true)}
          />
          <div className="blogcard-video-overlay absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <FaVideo className="blogcard-video-icon h-10 w-10 text-white opacity-80" />
          </div>
        </div>
      );
    }

    if (media.type === 'url') {
      return (
        <div className="blogcard-url-preview flex items-center justify-center h-full bg-linear-to-br from-indigo-50 to-blue-50">
          <FaExternalLinkAlt className="blogcard-url-icon h-10 w-10 text-indigo-300" />
        </div>
      );
    }

    return (
      <img
        className="blogcard-image w-full h-full object-cover"
        src={media.url}
        alt={title}
        onError={() => setImageError(true)}
      />
    );
  };

  return (
    <div className="blogcard-main bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Media Section */}
      <div className="blogcard-media-section relative h-48 bg-gray-100 overflow-hidden">
        {getMediaPreview()}

        {/* Tags Overlay */}
        {tags && tags.length > 0 && (
          <div className="blogcard-tags-overlay absolute top-3 left-3 flex gap-2">
            {tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="blogcard-tag px-2 py-1 text-xs font-medium text-white bg-indigo-600 rounded-md"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="blogcard-tag-more px-2 py-1 text-xs font-medium text-white bg-gray-600 rounded-md">
                +{tags.length - 2}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="blogcard-content-section p-5">
        <Link to={`/blogs/${slug}`}>
          <h3 className="blogcard-title text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="blogcard-description text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {truncateText(description, 120)}
        </p>

        {/* Meta Info */}
        <div className="blogcard-meta flex items-center gap-4 mb-4 text-xs text-gray-500">
          <div className="blogcard-author flex items-center gap-1">
            <FaUser className="blogcard-author-icon h-3 w-3" />
            <span className="blogcard-author-name">{author?.username || 'Admin'}</span>
          </div>
          <div className="blogcard-date flex items-center gap-1">
            <FaRegClock className="blogcard-date-icon h-3 w-3" />
            <span className="blogcard-date-text">{formatDate(createdAt)}</span>
          </div>
        </div>

        {/* Stats & Actions */}
        <div className="blogcard-actions flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="blogcard-stats flex items-center gap-4">
            <div className="blogcard-likes flex items-center gap-1 text-sm text-gray-500">
              <FaHeart className="blogcard-likes-icon h-4 w-4 text-red-400" />
              <span className="blogcard-likes-count">{likesCount || 0}</span>
            </div>
            <div className="blogcard-comments flex items-center gap-1 text-sm text-gray-500">
              <FaComment className="blogcard-comments-icon h-4 w-4 text-indigo-400" />
              <span className="blogcard-comments-count">{commentsCount || 0}</span>
            </div>
          </div>

          <button
            className="blogcard-share-btn flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
            onClick={() => console.log('Share blog:', slug)}
          >
            <FaShareAlt className="blogcard-share-icon h-4 w-4" />
            <span className="blogcard-share-text">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================
// MAIN PAGE COMPONENT
// ============================================
const BlogPage = () => {
  const { slug } = useParams();

  // TODO: Replace with actual API data
  const dummyBlogs = [
    {
      _id: '1',
      title: 'Getting Started with React and Modern Web Development',
      slug: 'getting-started-with-react',
      description: 'Learn the fundamentals of React and how to build modern web applications with the latest tools and techniques.',
      content: '<p>React is a powerful library for building user interfaces. In this comprehensive guide, we will explore the core concepts that make React so popular among developers worldwide.</p><p>From components and props to state management and hooks, you will learn everything you need to build production-ready applications.</p>',
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
      comments: [
        {
          _id: 'c1',
          content: 'Great article! Really helped me understand React hooks better.',
          user: { username: 'Alice' },
          createdAt: '2026-06-16T08:30:00Z',
        },
        {
          _id: 'c2',
          content: 'Thanks for sharing this. Looking forward to more content!',
          user: { username: 'Bob' },
          createdAt: '2026-06-17T14:20:00Z',
        },
      ],
    },
    {
      _id: '2',
      title: 'Mastering MongoDB: Tips and Best Practices',
      slug: 'mastering-mongodb',
      description: 'Deep dive into MongoDB performance optimization, schema design patterns, and advanced querying techniques.',
      content: '<p>MongoDB is a document-oriented NoSQL database that provides high performance, high availability, and easy scalability.</p>',
      media: {
        type: 'video',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      },
      author: { username: 'Jane Smith' },
      createdAt: '2026-06-20T14:00:00Z',
      likesCount: 28,
      commentsCount: 5,
      tags: ['MongoDB', 'Database', 'Backend'],
      comments: [],
    },
    {
      _id: '3',
      title: 'Building Scalable APIs with Node.js',
      slug: 'building-scalable-apis',
      description: 'A comprehensive guide to designing and implementing RESTful APIs that can handle millions of requests.',
      content: '<p>Node.js has become the go-to runtime for building APIs. Its event-driven, non-blocking I/O model makes it perfect for data-intensive real-time applications.</p>',
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
      comments: [],
    },
    {
      _id: '4',
      title: 'CSS Grid vs Flexbox: When to Use What',
      slug: 'css-grid-vs-flexbox',
      description: 'Understanding the differences between CSS Grid and Flexbox and when to choose one over the other.',
      content: '<p>CSS layout has evolved significantly over the years. Two of the most powerful tools in modern CSS are Grid and Flexbox.</p>',
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
      comments: [],
    },
    {
      _id: '5',
      title: 'The Future of AI in Web Development',
      slug: 'future-of-ai-web-development',
      description: 'Exploring how artificial intelligence is transforming the way we build and interact with web applications.',
      content: '<p>AI is revolutionizing every aspect of technology, and web development is no exception. From automated code generation to intelligent user interfaces.</p>',
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
      comments: [],
    },
    {
      _id: '6',
      title: 'Authentication Patterns in Modern Apps',
      slug: 'authentication-patterns',
      description: 'Comparing JWT, OAuth, and session-based authentication for your next project.',
      content: '<p>Security is paramount in modern web applications. Choosing the right authentication pattern can make or break your application security.</p>',
      media: null,
      author: { username: 'Emma Brown' },
      createdAt: '2026-07-01T18:00:00Z',
      likesCount: 15,
      commentsCount: 3,
      tags: ['Security', 'Authentication', 'JWT'],
      comments: [],
    },
  ];

  // If slug exists, show single blog detail
  if (slug) {
    const blog = dummyBlogs.find((b) => b.slug === slug);

    if (!blog) {
      return (
        <div className="blogpage-not-found min-h-screen flex flex-col items-center justify-center text-gray-400">
          <h2 className="blogpage-not-found-title text-2xl font-bold text-gray-700 mb-2">Blog Not Found</h2>
          <p className="blogpage-not-found-text mb-6">The blog you are looking for does not exist.</p>
          <Link
            to="/blogs"
            className="blogpage-not-found-back flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <FaArrowLeft className="blogpage-not-found-back-icon h-4 w-4" />
            Back to Blogs
          </Link>
        </div>
      );
    }

    return (
      <div className="blogpage-detail-wrapper min-h-screen bg-gray-50 py-12">
        <div className="blogpage-detail-container max-w-4xl mx-auto px-8">
          <Link
            to="/blogs"
            className="blogpage-detail-back flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors mb-6"
          >
            <FaArrowLeft className="blogpage-detail-back-icon h-4 w-4" />
            Back to all blogs
          </Link>
          <div className="blogpage-detail-card bg-white rounded-xl border border-gray-200 p-8">
            <BlogDetail blog={blog} />
          </div>
        </div>
      </div>
    );
  }

  // Show blog list
  return (
    <div className="blogpage-list-wrapper min-h-screen bg-gray-50 py-12">
      <div className="blogpage-list-container max-w-7xl mx-auto px-8">
        <BlogList blogs={dummyBlogs} />
      </div>
    </div>
  );
};

export default BlogPage;