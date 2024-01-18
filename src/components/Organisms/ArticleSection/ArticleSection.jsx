import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//  처음 page는 1, next 누르면 current page가 2가되고 /page/2 가되기에 params 도 2가됨.
// currentPage는 page를 가져와서 2가되니 => 계산 후 아티클 리스트 다음 내역보여줌
const ArticleSection = ({ className }) => {
  const { page = 1 } = useParams();
  const [currentPage, setCurrentPage] = useState(page ? parseInt(page) : 1);
  const [currentItems, setCurrentItems] = useState([]);
  const navigate = useNavigate();
  const frontMatterDatas = useFrontMatter();
  const fetchFrontMatter = useFrontMatterFetch();

  const numberItems = 6;
  // const totalPages = frontMatterDatas.length / numberItems;

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
