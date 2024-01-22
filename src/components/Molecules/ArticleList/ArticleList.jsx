import React, { useEffect } from 'react';
import Article from '@components/Atoms/Article/Article';
import { useNavigate } from 'react-router-dom';
import { usePostAction } from 'src/store/PostStore';
const ArticleList = ({ frontMatterDatas }) => {
  const navigate = useNavigate();
  const setPostData = usePostAction();
  const handleClick = attributes => {
    setPostData(attributes);
    navigate(`/articles/${attributes.slug}`);
  };

  return (
    <div>
      {frontMatterDatas &&
        frontMatterDatas.map((data, index) => (
          <Article
            attributes={data.attributes}
            key={index}
            onClick={() => handleClick(data.attributes)}
          />
        ))}
    </div>
  );
};

export default ArticleList;
