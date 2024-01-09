import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>안녕하세요 이현민입니다. </p>
      <p>영화,음식,휴식 그리고 음악을 좋아합니다.</p>
      <p>UX/UI에 관심있는 프론트엔드 주니어 개발자입니다.</p>
      <p>
        포트폴리오 확인은
        <span onClick={() => window.open('http://naver.com', '_blank')}>
          이곳을 클릭하여
        </span>
        확인 부탁드립니다.
      </p>
      <p style={{ fontFamily: 'Hans Calli', fontSize: '64px' }}>Hyunmin Yi</p>
    </div>
  );
};

export default About;
