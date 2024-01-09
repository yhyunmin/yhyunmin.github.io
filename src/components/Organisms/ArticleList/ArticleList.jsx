import React from 'react';

const ArticleList = ({ className }) => {
  return (
    <main>
      <section className={className}>
        <h2>Articles</h2>
        <ul>
          <li>
            {/* <Link to='/'> */}
            <article className='article'>
              <h3>포스트 제목1</h3>
              <p>Subtitle</p>
            </article>
            {/* </Link> */}
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ArticleList;
