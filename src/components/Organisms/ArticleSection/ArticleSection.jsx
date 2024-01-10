import React from 'react';

const ArticleSection = ({ className }) => {
  return (
    <main>
      <section className={className}>
        <h2>Articles</h2>
        <ul>
          <li>
            {/* <Link to='/'> */}
            <article className='article'>
              <h3>ArticleSection입니다</h3>
              <p>Subtitle</p>
            </article>
            {/* </Link> */}
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ArticleSection;
