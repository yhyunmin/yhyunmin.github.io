import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ArticleSection = ({ className }) => {
  const { page = 1 } = useParams();
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const [currentItems, setCurrentItems] = useState([]);
  const navigate = useNavigate();
  const frontMatterDatas = useFrontMatter();
  const fetchFrontMatter = useFrontMatterFetch();

  const numberItems = 6;
  const totalPages = frontMatterDatas.length / numberItems;

  useEffect(() => {
    const startIndex = (currentPage - 1) * numberItems;
    const endIndex = startIndex + numberItems;
    const currentItems = frontMatterDatas.slice(startIndex, endIndex);
    setCurrentItems(currentItems);
  }, [currentPage, numberItems, frontMatterDatas]);

  const handleNextPage = () => {
    // if (!(currentPage > 1)) {
    //   return null;
    // }
    setCurrentPage(prev => prev + 1);
    navigate(`/page/${currentPage + 1}`);
  };
  const handlePrevPage = () => {
    // if (!(currentPage < totalPages)) {
    //   return null;
    // }
    setCurrentPage(prev => prev - 1);
    navigate(`/page/${currentPage - 1}`);
  };

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
      <button onClick={handleNextPage}>next</button>
      <button onClick={handlePrevPage}>prev</button>
    </main>
  );
};

export default ArticleSection;
