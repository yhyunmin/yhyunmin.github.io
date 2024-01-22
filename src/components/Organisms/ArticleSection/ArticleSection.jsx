import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import { useFrontMatter, useFrontMatterFetch } from 'src/store/ArticleStore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  button {
    font-size: 1.6rem;
    font-weight: 600;
    opacity: 0.7;
    &:hover {
      color: #5022c2;
      opacity: 1;
    }
  }
`;
//  처음 page는 1, next 누르면 current page가 2가되고 /page/2 가되기에 params 도 2가됨.
// currentPage는 page를 가져와서 2가되니 => 계산 후 아티클 리스트 다음 내역보여줌
const ArticleSection = ({ className }) => {
  // const { page } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page');
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const [currentItems, setCurrentItems] = useState([]);
  const navigate = useNavigate();
  const frontMatterDatas = useFrontMatter();
  const numberItems = 6;
  const totalPages = Math.ceil(frontMatterDatas.length / numberItems);

  const handleNextPage = () => {
    if (!(currentPage < totalPages)) {
      return null;
    }
    setCurrentPage(prev => prev + 1);
    navigate(`/articles?page=${currentPage + 1}`);
  };
  const handlePrevPage = () => {
    if (!(currentPage > 1)) {
      return null;
    }
    setCurrentPage(prev => prev - 1);
    navigate(`/articles?page=${currentPage - 1}`);
  };

  useEffect(() => {
    const startIndex = (currentPage - 1) * numberItems;
    const endIndex = startIndex + numberItems;
    const currentItems = frontMatterDatas.slice(startIndex, endIndex);
    setCurrentItems(currentItems);
  }, [currentPage, numberItems, frontMatterDatas]);

  useEffect(() => {
    if (!page) {
      setCurrentPage(1);
      return;
    }
    if (page > totalPages) {
      setCurrentPage(1);
      navigate('/articles?page=1');
      return;
    }
    navigate(`/articles?page=${page}`);
  }, [page, navigate, totalPages]);

  return (
    <main className={className}>
      <ArticleList frontMatterDatas={currentItems} />
      <ButtonBox>
        <button onClick={handlePrevPage}>prev</button>
        <button onClick={handleNextPage}>next</button>
      </ButtonBox>
    </main>
  );
};

export default ArticleSection;
