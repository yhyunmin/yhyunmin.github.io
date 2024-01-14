import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import ArticleList2 from '@components/Molecules/ArticleList/ArticleList2';
import ArticleList3 from '@components/Molecules/ArticleList/ArticleList3';
import ArticleList4 from '@components/Molecules/ArticleList/ArticleList4';
import React from 'react';

const ArticleSection = ({ className }) => {
  return (
    <main className={className}>
      {/* <ArticleList3 /> */}
      <ArticleList4 />
      {/* <ArticleList2 /> */}
      <ArticleList />
    </main>
  );
};

export default ArticleSection;
