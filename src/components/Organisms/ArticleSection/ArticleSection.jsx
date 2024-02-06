import ArticleList from '@components/Molecules/ArticleList/ArticleList';
import { useFrontMatter } from 'src/store/ArticleStore';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styled } from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  @media (max-width: 500px) {
    padding-bottom: 2rem;
  }
  button {
    font-size: 1.6rem;
    font-weight: 600;
    background-color: transparent;
    &:hover {
      color: #5022c2;
    }
  }
`;
//  처음 page는 1, next 누르면 current page가 2가되고 /page/2 가되기에 params 도 2가됨.
// currentPage는 page를 가져와서 2가되니 => 계산 후 아티클 리스트 다음 내역보여줌
const ArticleSection = ({ className }) => {
  // const { page } = useParams();
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page');
  const tag = searchParams.get('tag');
  const [currentPage, setCurrentPage] = useState(parseInt(page));
  const [currentItems, setCurrentItems] = useState([]);
  const navigate = useNavigate();
  const frontMatterDatas = useFrontMatter();
  const numberItems = 4;
  const totalPages = Math.ceil(frontMatterDatas.length / numberItems);
  const startIndex = (currentPage - 1) * numberItems;
  const endIndex = startIndex + numberItems;
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
      navigate(`/articles?page=1`);
      return;
    }
    navigate(`/articles?page=${page}`);
  }, [page, navigate, totalPages]);

  useEffect(() => {
    if (!tag) {
      setCurrentItems(frontMatterDatas);
    }
    if (tag) {
      setCurrentItems(
        frontMatterDatas
          .filter(
            item => item.attributes.tags.toLowerCase() === tag.toLowerCase()
          )
          .slice(startIndex, endIndex)
      );
    }
  }, [tag, frontMatterDatas]);
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
