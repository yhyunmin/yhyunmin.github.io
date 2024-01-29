import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '@img/profile.png';
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
