import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '@img/profile.png';
import Template from '@components/Templates/Main';
import { useLocalStorage } from 'src/store/LocalStorageStore';
import { useFrontMatter } from 'src/store/ArticleStore';

const Main = () => {
  return (
    <>
      <Template tags={tags} />
    </>
  );
};

export default Main;
