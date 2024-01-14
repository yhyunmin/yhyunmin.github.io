import React, { useEffect, useState } from 'react';
import fm from 'front-matter';
const ArticleList3 = () => {
  //using  require.context import all filenames in contents folder
  const file_names2 = require
    .context('../../../contents', false, /\.md$/)
    .keys();
  console.log(file_names2);
  //remove ./ from file_names2
  const file_names3 = file_names2.map(file_name =>
    file_name.replace(/^\.\//, '')
  );
  console.log(file_names3, 'file_nemaes3');
  const file_names = ['2023-05-20--redux.md', '2023-05-20--test.md'];
  const [mds, setMds] = useState([]);
  const [contents, setContents] = useState([]);

  //promies all fetching import
  useEffect(() => {
    const promises = file_names3.map(file_name => {
      return import(`../../../contents/${file_name}`).then(res => {
        return fetch(res.default)
          .then(res => res.text())
          .catch(err => console.log(err));
      });
    });
    Promise.all(promises).then(data => {
      setMds(data);
    });
  }, []);

  // mds convert fm, and attrbitues body are into contents
  useEffect(() => {
    console.log(mds);
    mds.forEach(md => {
      const data = fm(md); // frontMatter.attributes, frontMatter.body
      setContents(prev => [...prev, data]);
    });
  }, [mds]);

  useEffect(() => {
    console.log(contents);
  }, [contents]);
  //
  // problem : 첫 렌더링시에는 mds 가 빈값
  //

  // useEffect(() => {
  //   file_names.forEach(file_name => {
  //     import(`../../../contents/${file_name}`).then(res => {
  //       fetch(res.default)
  //         .then(res => res.text())
  //         .catch(err => console.log(err))
  //         .then(setMds(prev => [...prev, res]));
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log(mds);
  // }, []);
  return <div>Artic</div>;
};

export default ArticleList3;
