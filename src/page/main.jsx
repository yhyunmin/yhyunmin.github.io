import React from 'react';
import { Link } from 'react-router-dom';

const main = () => {
  return (
    <div>
      <header>
        <h1>
          이현민 블로그
          <Link>
            <img src={'./img/logo.png'} alt='이현민 블로그 로고' />
          </Link>
        </h1>
        <h2>Hyumin Yi</h2>
        <p>안녕하세요. 이현민 입니다. </p>
        <nav>
          <ul>
            <li>
              <Link>Articles</Link>
            </li>
            <li>
              <Link>About Me</Link>
            </li>
          </ul>
        </nav>
        <article>
          <ul>
            <li>github link</li>
            <li>resume</li>
            <li>email</li>
          </ul>
        </article>
      </header>
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
        최근 본 포스트
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
          <Link>
            <article className='article'>
              <h2>포스트 제목1</h2>
              <h3>Subtitle</h3>
            </article>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default main;
