import { create } from 'zustand';
import fm from 'front-matter';

const useFrontMatterStore = create((set, get) => ({
  //store
  frontMatterDatas: [],
  //action
  action: {
    setFrontMatterDatas: data => {
      set({ frontMatterDatas: data });
    },
  },
  //fetch
  fetch: {
    fetchMdFmData: async () => {
      const context = await require.context('src/contents', false, /\.md$/);
      const fileNamesList = await context
        .keys()
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
