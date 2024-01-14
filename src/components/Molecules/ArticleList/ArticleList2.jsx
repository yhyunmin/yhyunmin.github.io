import React, { useCallback, useEffect, useState } from 'react';
import fm from 'front-matter';

const ArticleList2 = () => {
  const [mds, setMds] = useState([]);
  const [content, setContent] = useState([]);
  const context = require.context('../../../contents', false, /\.md$/).keys();
  const mdFiles = context.map(file => file.replace(/^\.\//, ''));

  const fetchingData = useCallback(() => {
    mdFiles.forEach(mdFile => {
      console.log(`../../../contents/${mdFile}`);
      import(`../../../contents/${mdFile}`)
        .then(res => {
          console.log(res.default, 'res.default');
          fetch(res.deafult);
        })
        .then(res => {
          console.log(res, 'res');
          res.text();
        })
        .then(res => {
          setMds(prev => [...prev, res]).catch(err => console.log(err));
        });
    });
  }, [mdFiles]);

  useEffect(() => {
    fetchingData();
    console.log(mds, 'mds');
  }, [fetchingData, mds]);

  useEffect(() => {
    mds.forEach(md => {
      const frontMatter = fm(md); // frontMatter.attributes, frontMatter.body
      setContent([...content, frontMatter]);
    });
  }, [content, mds]);

  return <div></div>;
};

export default ArticleList2;
