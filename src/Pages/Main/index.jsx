import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '@img/profile.png';
import Template from '@components/Templates/Main';
import { useLocalStorage } from 'src/store/LocalStorageStore';
import { useFrontMatter } from 'src/store/ArticleStore';

const Main = () => {
  const [tags, setTags] = useState([]);
  const localStorage = useLocalStorage();
  const frontMatterDatas = useFrontMatter();

  const sortofTagsType = useMemo(() => {
    const tagList = [];
    const countList = {};
    frontMatterDatas.forEach(data => {
      tagList.push(data.attributes.tags);
    });
    tagList.forEach(tag => {
      countList[tag] = (countList[tag] || 0) + 1;
    });
    const sortedTags = Object.entries(countList)
      .map(([tag, count], index) => ({
        id: index + 1,
        tag: tag,
        count: count,
      }))
      .sort((a, b) => b.count - a.count);
    setTags(sortedTags);
    return sortedTags;
  }, []);

  useEffect(() => {
    console.log(tags, 'test');
  }, [tags]);
  return (
    <>
      <Template tags={tags} />
    </>
  );
};

export default Main;
