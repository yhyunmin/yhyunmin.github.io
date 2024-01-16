import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
import React, { useEffect, useState } from 'react';

const ArticleSection = ({ className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const frontMatterDatas = useFrontMatter();
  const fetchFrontMatter = useFrontMatterFetch();

  const numberItems = 6;
  const totalPages = frontMatterDatas.length / numberItems;
  const handleNextPage = () => {
    if (!(currentPage > 1)) {
      return null;
    }
    setCurrentPage(prev => prev + 1);
  };
  const handlePrevPage = () => {
    if (!(currentPage < totalPages)) {
      return null;
    }
    setCurrentPage(prev => prev - 1);
  };
  const startIndex = (currentPage - 1) * numberItems;
  const endIndex = startIndex + numberItems;
  const currentItems = frontMatterDatas.slice(startIndex, endIndex);

  useEffect(() => {
    const fetchData = async () => {
      await fetchFrontMatter();
    };
    fetchData()
      .then(() => {
        console.log('done');
      })
      .catch(error => console.log(error));
  }, [fetchFrontMatter]);

  return (
    <main className={className}>
      <ArticleList frontMatterDatas={currentItems} />
      <button>next</button>
      <button>prev</button>
    </main>
  );
};

export default ArticleSection;
