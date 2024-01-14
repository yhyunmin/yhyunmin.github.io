import React, { useCallback, useEffect, useMemo, useState } from 'react';
import fm from 'front-matter';

//  todo : dynamic import를 이용하여 최적화

const fetchData = async () => {
  const context = require.context('../../../contents', false, /\.md$/).keys();
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
  const [test, setTest] = useState();

  useEffect(() => {
    const updateContents = async () => {
      const data = await fetchData();
      const frontMatterData = data.map(md => fm(md));
      setContents([...contents, frontMatterData]);
    };
    updateContents();
  }, []);

  useEffect(() => {
    console.log(contents);
  }, [contents, test]);

  return <div>ArticleList4</div>;
};

export default ArticleList4;
