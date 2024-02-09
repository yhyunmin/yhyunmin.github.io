import { create } from 'zustand';
import fm from 'front-matter';

const useFrontMatterStore = create((set, get) => ({
  //store
  frontMatterDatas: [],
  tagList: [],
  //action
  action: {
    setFrontMatterDatas: data => {
      set({ frontMatterDatas: data });
    },
    setTagList: () => {
      const tagsArray = [];
      const countObject = {};
      get().frontMatterDatas.forEach(data => {
        const tag = data.attributes.tags.toLowerCase();
        tagsArray.push(tag);
      });
      tagsArray.forEach(tag => {
        countObject[tag] = (countObject[tag] || 0) + 1;
      });
      const sortedTags = Object.entries(countObject)
        .map(([tag, count], index) => ({
          id: index + 1,
          tag: tag,
          count: count,
        }))
        .sort((a, b) => b.count - a.count);
      set({ tagList: sortedTags });
    },
  },
  //fetch
  fetch: {
    fetchMdFmData: async () => {
      const context = await require.context('src/contents', false, /\.md$/);
      const fileNamesList = await context
        .keys()
        .reverse()
        .map(fileName => fileName.replace(/^\.\//, ''));

      const promises = fileNamesList.map(async fileName => {
        const md = await import(`src/contents/${fileName}`);
        const response = await fetch(md.default);
        return response.text();
      });
      const data = await Promise.all(promises);
      const fmData = data.map(md => fm(md));
      get().action.setFrontMatterDatas(fmData);
      return fmData;
    },
  },
}));

export const useFrontMatter = () =>
  useFrontMatterStore(state => state.frontMatterDatas);
export const useFrontMatterAction = () =>
  useFrontMatterStore(state => state.action.setFrontMatterDatas);
export const useFrontMatterFetch = () =>
  useFrontMatterStore(state => state.fetch.fetchMdFmData);

export const useTagList = () => useFrontMatterStore(state => state.tagList);
export const useTagListAction = () =>
  useFrontMatterStore(state => state.action.setTagList);
