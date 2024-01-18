import fm from 'front-matter';
import contextLoader from './contextLoader';

let Fmdata ;
const fetchMdData = async () => {
  const fileNamesList = await contextLoader
    .keys()
    .map(fileName => fileName.replace(/^\.\//, ''));

  const promises = fileNamesList.map(async fileName => {
    const md = await import(`src/contents/${fileName}`);
    const response = await fetch(md.default);
    return response.text();
  });
  const data = await Promise.all(promises);
  const fmData = data.map(md => fm(md));
  return fmData;
};

export default fetchMdData;
