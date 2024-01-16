import React, { useCallback, useEffect, useMemo, useState } from 'react';
import fm from 'front-matter';
import Article from '@components/Atoms/Article/Article';

//  todo : dynamic import를 이용하여 최적화

const fetchMdData = async () => {
  const context = await require.context('src/contents', false, /\.md$/).keys();
  const fileNamesForGhPages = await context.map(file_name => {
    return file_name.replace(/^\.\/|\.md$/g, ''); // gh-pages
  });
  const promises = fileNamesForGhPages.map(async file_name => {
    const module = await import(`../../../contents/${file_name}.md`);
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