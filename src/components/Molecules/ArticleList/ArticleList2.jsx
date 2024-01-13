import React, { useEffect, useState } from 'react';
import fm from 'front-matter';
import Markdown from 'markdown-to-jsx';
const ArticleList2 = () => {
  const [content, setContent] = useState([]);
  const mdfiles = require.context('../../../contents', false, /\.md$/).keys();
  useEffect(() => {
    mdfiles.map(mdfile => {
      const mdFile = mdfile.replace(/^\.\//, '');
      console.log(mdFile);
      import(`../../../contents/${mdFile}`).then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => setContent([...content, res]))
          .catch(err => console.log(err));
        console.log(res.default, 'default');
      });
    });
    console.log(content, 'conte2nt');
  }, []);

  return (
    <div>
      <Markdown>{content}</Markdown>
    </div>
  );
};

export default ArticleList2;
