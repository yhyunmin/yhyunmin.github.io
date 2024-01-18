import React from 'react';
import Template from '@components/Templates/Post';
import { useParams } from 'react-router-dom';
import { useFrontMatter } from 'src/store/ArticleStore';
const Post = () => {
  const { slug } = useParams();
  const frontMatterDatas = useFrontMatter();

  const findPost = frontMatterDatas.find(data => data.slug === slug);

  return (
    <div>
      <Template Post={findPost} />
    </div>
  );
};

export default Post;
