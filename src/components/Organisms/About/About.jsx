import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>UX / UI에 관심있는 프론트엔드 주니어 개발자입니다. </p>
      <p>영화,음식,휴식,음악 좋아합니다.</p>
      <p>
        이력서 확인은
        <span onClick={() => window.open('http://naver.com', '_blank')}>
          이곳을 클릭하여
        </span>
        확인 부탁드립니다.
      </p>
    </div>
  );
};

export default About;
