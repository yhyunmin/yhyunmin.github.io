import React, { useEffect } from 'react';
import Template from '@components/Templates/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { useFrontMatter } from 'src/store/ArticleStore';
import { usePost } from 'src/store/PostStore';
const Post = () => {
  const { slug } = useParams();
  const postData = usePost();
  const fmData = useFrontMatter();
  const navigate = useNavigate();
  const findPost = fmData.find(data => data.attributes.slug === slug);
  useEffect(() => {
    console.log(findPost);
  }, []);
  return (
    <div>
      <Template post={findPost} />
    </div>
  );
};

export default Post;
