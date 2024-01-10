import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import React from 'react';

const ArticleSection = ({ className }) => {
  return (
    <main className={className}>
      <ArticleList />
    </main>
  );
};

export default ArticleSection;
