import Article from '@components/Atoms/Article/Article';
import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import matter from 'gray-matter';

const ArticleList = ({ context }) => {
  // const [mdFiles, setMdFiles] = useState([]);

  // useEffect(() => {
  //   const files = context.keys().map(key => {
  //     const fileContent = context(key).default;
  //     const { date, description, title } = matter(fileContent);
  //     return { date, description, title };
  //   });
  //   setMdFiles(files);
  //   console.log(mdFiles);
  // }, [context]);
  return (
    <ul>
      <li>
        <Article />
      </li>
    </ul>
  );
};

export default ArticleList;
