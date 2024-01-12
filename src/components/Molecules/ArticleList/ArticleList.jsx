import Article from '@components/Atoms/Article/Article';
import { React, useEffect } from 'react';
import frontMatter from 'front-matter';
// // contextMd로 md파일들을 불러와 불러온 파일들을 순회하며 처리함
// import test from '../../../contents/2023-05-20--test.md';
// useEffect(() => {
//   fetch(test).then(response => {
//     response.text().then(text => {
//       const test2 = frontMatter(text);
//       console.log(test2.attributes);
//       console.log(test2.body);
//     });
//   });
// }, []);

const ArticleList = () => {
  const mdFilesContext = require.context('../../../contents/', false, /\.md$/);
  const mdFilesKeys = mdFilesContext.keys();
  mdFilesKeys.forEach(key => {
    const mdFile = mdFilesContext(key);
    console.log(mdFile);
    console.log(frontMatter(mdFile));
  }, []);
  return (
    <ul>
      <li>
        {}
        <Article />
      </li>
    </ul>
  );
};

export default ArticleList;
