import React, { useEffect } from 'react';

const ArticleList3 = () => {
  const file_names = ['2023-05-20--redux.md', '2023-05-20--test.md'];

  useEffect(() => {
    file_names.forEach(file_name => {
      import(`../../../contents/${file_name}`).then(res => {
        fetch(res.default)
          .then(res => res.text())
          .then(res => console.log(res));
      });
    });
  }, []);
  return <div>Artic</div>;
};

export default ArticleList3;
