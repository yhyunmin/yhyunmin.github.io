import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '@img/profile.png';
import Template from '@components/Templates/Main';
import { useLocalStorage } from 'src/store/LocalStorageStore';

const Main = () => {
  const localStorage = useLocalStorage();
  useEffect(() => {
    console.log(localStorage);
  }, []);
  return (
    <>
      <Template />
    </>
  );
};

export default Main;
