import React, { useEffect } from 'react';
import Template from '@components/Templates/Post';
import { useParams } from 'react-router-dom';
import { useFrontMatter } from 'src/store/ArticleStore';
import smoothscroll from 'smoothscroll-polyfill';
const Post = () => {
  const { slug } = useParams();
  const fmData = useFrontMatter();
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
    smoothscroll.polyfill();
  }, []);

  return <>{findPost && <Template post={findPost} summary={getSummary} />}</>;
};

export default Post;
