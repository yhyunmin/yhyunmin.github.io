import React, { useEffect } from 'react';
import Article from '@components/Atoms/Article/Article';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
const ArticleList = () => {
  const frontMatterDatas = useFrontMatter();
  const fetchFrontMatter = useFrontMatterFetch();

  useEffect(() => {
    const fetchData = async () => {
      await fetchFrontMatter();
    };
    fetchData()
      .then(() => {
        console.log('done');
      })
      .catch(error => console.log(error));
  }, [fetchFrontMatter]);

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
