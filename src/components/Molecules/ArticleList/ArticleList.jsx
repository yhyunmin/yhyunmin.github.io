import React, { useEffect } from 'react';
import Article from '@components/Atoms/Article/Article';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
import { useNavigate } from 'react-router-dom';
const ArticleList = ({ frontMatterDatas }) => {
  const navigate = useNavigate();
  // if article component is clicked. navigate to post page
  const handleClick = slug => {
    navigate(`/post/${slug}`);
  };

  return (
    <div>
      {frontMatterDatas &&
        frontMatterDatas.map((data, index) => (
          <Article
            attributes={data.attributes}
            key={index}
            onClick={() => handleClick(data.attributes.slug)}
          />
        ))}
    </div>
  );
};

export default ArticleList;
