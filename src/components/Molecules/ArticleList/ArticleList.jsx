import React, { useEffect } from 'react';
import Article from '@components/Atoms/Article/Article';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
const ArticleList = ({ frontMatterDatas }) => {
  return (
    <div>
      {frontMatterDatas &&
        frontMatterDatas.map((data, index) => (
          <Article attributes={data.attributes} key={index} />
        ))}
    </div>
  );
};

export default ArticleList;
