import React from 'react';
// import Template from '@components/Templates/About/Template';

const About = () => {
  return (
    <div>
      <aside>
        <input type='text' />
        <ul>
          <li>
            Js <span>1</span>
          </li>
          <li>
            Ts<span>2</span>
          </li>
          <li>
            react<span>3</span>
          </li>
          <li>
            zustand<span>1</span>
          </li>
        </ul>
      </aside>
      <aside>
        <h2>최근 본 포스트</h2>
        <ul>
          <li>최근 본 포스트1</li>
          <li>최근 본 포스트2</li>
          <li>최근 본 포스트3</li>
          <li>최근 본 포스트4</li>
          <li>최근 본 포스트5</li>
        </ul>
      </aside>
      <main>
        <section className='articleList'>
          <h2>About</h2>
          <ul>
            <li>
              {/* <Link to='/'> */}
              <article className='article'>
                <h3>This is about page</h3>
                <p>Subtitle</p>
              </article>
              {/* </Link> */}
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default About;
