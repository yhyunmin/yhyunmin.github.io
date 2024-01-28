import React, { useEffect } from 'react';
import Article from '@components/Atoms/Article/Article';
import { useNavigate } from 'react-router-dom';
import { usePostAction } from 'src/store/PostStore';
import { useSetLocalStorage } from 'src/store/LocalStorageStore';
const ArticleList = ({ frontMatterDatas }) => {
  const navigate = useNavigate();
  const setPostData = usePostAction();
  const setLocalStorage = useSetLocalStorage();

  const handleClick = attributes => {
    setPostData(attributes);
    navigate(`/articles/${attributes.slug}`);
    setLocalStorage({
      id: attributes.date,
      slug: attributes.slug,
      title: attributes.title,
    });
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
