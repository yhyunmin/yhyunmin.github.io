import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '@img/profile.png';
import Template from '@components/Templates/Main';

const Main = () => {
  useEffect(() => {
    // localStorage.getItem
  }, []);
  return (
    <>
      <Template />
    </>
  );
};

export default Main;
