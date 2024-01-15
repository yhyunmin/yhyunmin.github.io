import React, { useCallback, useEffect, useMemo, useState } from 'react';
import fm from 'front-matter';
import Article from '@components/Atoms/Article/Article';

//  todo : dynamic import를 이용하여 최적화

const fetchMdData = async () => {
  const context = require.context('src/contents', false, /\.md$/).keys();
  const fileNames = context.map(file_name => file_name.replace(/^\.\//, ''));
  const promises = fileNames.map(async file_name => {
    const module = await import(`../../../contents/${file_name}`);
    const response = await fetch(module.default);
    return response.text();
  });
  const data = await Promise.all(promises);
  return data;
};

const ArticleList4 = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const updateContents = async () => {
      const data = await fetchMdData();
      const frontMatterData = data.map(md => fm(md));
      setContents(frontMatterData);
    };
    updateContents();
  }, []);

  useEffect(() => {
    console.log(contents[0], 'conetns');
  }, [contents]);

  return (
    <div>
      {contents &&
        contents.map((content, index) => {
          return <Article attributes={content.attributes} key={index} />;
        })}
    </div>
  );
};

export default ArticleList4;