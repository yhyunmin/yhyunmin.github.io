import React, { useCallback, useEffect, useMemo, useState } from 'react';
import fm from 'front-matter';
import Article from '@components/Atoms/Article/Article';

const file_names2 = require.context('../../../contents', false, /\.md$/).keys();
const file_names3 = file_names2.map(file_name =>
  file_name.replace(/^\.\//, '')
);
const ArticleList3 = () => {
  console.log(file_names3, 'file_nemaes3');
  const [mds, setMds] = useState([]);
  const [contents, setContents] = useState([]);

  const fetchData = useCallback(async () => {
    try {
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
    } catch (error) {
      console.log(error, 'error');
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const updateContents = useMemo(
    () => async () => {
      try {
        console.log(mds, 'mds');
        mds.forEach(md => {
          const data = fm(md); // frontMatter.attributes, frontMatter.body
          setContents(prev => [...prev, data]);
        });
      } catch (error) {
        console.log(error);
      }
    },
    [mds]
  );

  useEffect(() => {
    updateContents();
  }, [updateContents]);

  useEffect(() => {
    console.log(contents, 'this is only console log ,contents');
  }, [contents]);
  //
  // problem : 첫 렌더링시에는 mds 가 빈값
  //

  // useEffect(() => {
  //   file_names.forEach(file_name => {
  //     import(`../../../contents/${file_name}`).then(res => {
  //     import Article from './../../Atoms/Article/Article';
  // fetch(res.default);
  //         .then(res => res.text())
  //         .catch(err => console.log(err))
  //         .then(setMds(prev => [...prev, res]));
  //     });
  //   });
  // }, []);
  // useEffect(() => {
  //   console.log(mds);
  // }, []);
  return (
    <div>
      {contents.map((content, index) => (
        <Article key={index} content={content} />
      ))}
    </div>
  );
};

export default ArticleList3;
