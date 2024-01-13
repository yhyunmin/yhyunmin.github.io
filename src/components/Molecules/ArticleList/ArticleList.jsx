import Article from '@components/Atoms/Article/Article';
import { React, useEffect } from 'react';
import frontMatter from 'front-matter';
import test2 from '../../../contents/2023-05-20--test.md';
// // contextMd로 md파일들을 불러와 불러온 파일들을 순회하며 처리함
// useEffect(() => {
//   fetch(test).then(response => {
//     response.text().then(text => {
//       const test2 = frontMatter(text);
//       console.log(test2.attributes);
//       console.log(test2.body);
//     });
//   });
// }, []);
// const importAllMdFiles = async () => {
//   const mdFiles = await Promise.all(
//     require
//       .context('../../../contents', false, /\.md$/)
//       .keys()
//       .map(async filename => {
//         const test = filename.replace(/^\.\//, '');
//         const fileContent = await import(`../../../contents/${test}`);
//         const filePath = `../../../contents/${test}`;
//         const test3 = import(filePath);
//         const response = await fetch(filePath);
//         const test2 = frontMatter();
//         console.log(filePath, response);
//         return { filename, content: fileContent, test2, test3 };
//       })
//   );
// };

// importAllMdFiles 함수 호출
// importAllMdFiles();

const ArticleList = props => {
  useEffect(() => {
    fetch(test2).then(response => {
      response.text().then(text => {
        const test2 = frontMatter(text);
        console.log(test2.attributes);
        console.log(test2.body);
      });
    });
  }, []);
  useEffect(() => {
    fetch('../../../contents/2023-05-20--redux.md').then(response => {
      response.text().then(text => {
        console.log(text);
        const test2 = frontMatter(text);
        console.log(test2.attributes);
        console.log(test2.body);
      });
    });
  }, []);
  return (
    <ul>
      <li>
        <Article />
      </li>
    </ul>
  );
};

export default ArticleList;
