const { create } = require('zustand');

const usePostStore = create((set, get) => ({
  postData: {},
  //action
  action: {
    setPostData: data => {
      set({ postData: data });
    },
  },
}));

export const usePost = () => {
  return usePostStore(state => state.postData);
};
export const usePostAction = () => {
  return usePostStore(state => state.action.setPostData);
};
