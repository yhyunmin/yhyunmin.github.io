import React from 'react';

const About = () => {
  return (
    <div>
      <h2>About me</h2>
      <p>문화 활동과 휴식을 좋아하는 신입 프론트엔드 개발자 이현민 입니다.</p>
      <p>UX/UI에 관심있는 프론트엔드 주니어 개발자입니다.</p>
      <p>디자인에 대한 관ㅅ미도 ㅁ</p>

      <p>
        포트폴리오 확인은{' '}
        <span
          onClick={() => window.open('http://github.com/yhyunmin', '_blank')}
          style={{ fontWeight: 700, cursor: 'pointer' }}>
          깃헙
        </span>{' '}
        확인 부탁드립니다.
      </p>
      <p style={{ fontFamily: 'Hans Calli', fontSize: '64px' }}>Hyunmin Yi</p>
    </div>
  );
};

export default About;
