import React, { useEffect, useState } from 'react';
import fm from 'front-matter';
const ArticleList2 = () => {
  const [content, setContent] = useState();
  const mdfiles = require.context('../../../contents', false, /\.md$/).keys();
  // useEffect(() => {
  //   mdfiles.map(mdfile => {
  //     const mdFile = mdfile.replace(/^\.\//, '');
  //     console.log(mdFile);
  //     import(`../../../contents/${mdFile}`).then(res => {
  //       fetch(res.default)
  //         .then(res => res.text())
  //         .then(res => setContent([...content, res]))
  //         .catch(err => console.log(err));
  //       console.log(res.default, 'default');
  //     });
  //   });
  //   console.log(content, 'conte2nt');
  // }, []);
  useEffect(() => {
    const md = require('../../../contents/2023-05-20--test.md');
    console.log(md);

    fetch(md)
      .then(res => res.text()) // Return the text Promise
      .then(text => {
        setContent(text);
        console.log(content, 'content1');
        fm(content);
        console.log(fm(content).attributes);
      });
  }, [content]);
  return <div></div>;
};

export default ArticleList2;
