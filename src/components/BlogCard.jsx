import { Link } from 'react-router-dom';
import { FaHeart, FaComment, FaShareAlt, FaRegClock, FaUser } from 'react-icons/fa';

const BlogCard = ({ blog }) => {
  const {
    _id,
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

  return (
    <div className="blogcard-main bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      
      {/* Media Section */}
      <div className="blogcard-media-section relative h-48 bg-gray-100 overflow-hidden">
        {media?.url ? (
          media.type === 'video' ? (
            <video
              className="blogcard-video w-full h-full object-cover"
              src={media.url}
              poster={media.thumbnail}
              muted
            />
          ) : (
            <img
              className="blogcard-image w-full h-full object-cover"
              src={media.url}
              alt={title}
            />
          )
        ) : (
          <div className="blogcard-media-placeholder flex items-center justify-center h-full bg-linear-to-br from-indigo-50 to-purple-50">
            <span className="blogcard-placeholder-text text-gray-400 text-sm font-medium">
              No Media
            </span>
          </div>
        )}
        
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
        
        {/* Title */}
        <Link to={`/blogs/${slug}`}>
          <h3 className="blogcard-title text-lg font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Description */}
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
          
          {/* Stats */}
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

          {/* Share Button */}
          <button
            className="blogcard-share-btn flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
            onClick={() => {
              // TODO: Implement share functionality
              console.log('Share blog:', slug);
            }}
          >
            <FaShareAlt className="blogcard-share-icon h-4 w-4" />
            <span className="blogcard-share-text">Share</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;