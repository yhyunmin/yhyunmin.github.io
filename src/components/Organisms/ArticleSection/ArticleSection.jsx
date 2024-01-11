import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import React from 'react';

const ArticleSection = ({ className }) => {
  const context = require.context('@md/', false, /\.md$/);
  return (
    <main className={className}>
      <ArticleList context={context} />
    </main>
  );
};

export default ArticleSection;
