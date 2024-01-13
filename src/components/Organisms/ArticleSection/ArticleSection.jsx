import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import ArticleList2 from '@components/Molecules/ArticleList/ArticleList2';
import React from 'react';

const ArticleSection = ({ className }) => {
  return (
    <main className={className}>
      <ArticleList2 />
      <ArticleList />
    </main>
  );
};

export default ArticleSection;
