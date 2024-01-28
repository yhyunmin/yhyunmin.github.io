import React from 'react';
import { Link } from 'react-router-dom';

const RecentPost = ({ post, className }) => {
  return (
    <Link to={`/articles/${post.slug}`} className={className}>
      {post.title}
    </Link>
  );
};

export default RecentPost;
