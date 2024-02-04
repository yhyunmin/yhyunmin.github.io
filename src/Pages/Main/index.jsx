import React, { useEffect } from 'react';
import Template from '@components/Templates/Main';
import { useTagListAction } from 'src/store/ArticleStore';

const Main = () => {
  const setTagList = useTagListAction();

  useEffect(() => {
    setTagList();
  }, []);
  return (
    <>
      <Template />
    </>
  );
};

export default Main;
