import React, { useEffect } from 'react';
import Template from '@components/Templates/Post';
import { useNavigate, useParams } from 'react-router-dom';
import { useFrontMatter } from 'src/store/ArticleStore';
import { usePost } from 'src/store/PostStore';
import { generateSlug } from 'src/util/generateSlug';
const Post = () => {
  const { slug } = useParams();
  const postData = usePost();
  const fmData = useFrontMatter();
  const navigate = useNavigate();
  const findPost = fmData.find(data => data.attributes.slug === slug);
  const getSummary = findPost.body.match(/^#{3}[^#].*$/gm);

  // const observer = new IntersectionObserver(e => {
  //   e.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       entry.target.style.fontWeight = '700';
  //     } else {
  //       entry.target.style.fontWeight = '400';
  //     }
  //   });
  // });
  // observer.observe();

  useEffect(() => {
    console.log(getSummary);
  }, []);

  return (
    <div>
      <Template post={findPost} summary={getSummary} />
    </div>
  );
};

export default Post;
