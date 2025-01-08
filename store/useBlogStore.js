import { create } from 'zustand';

const useBlogStore = create((set) => ({
  singleBlog: null,
  setLikes: (user) =>
    set((state) => {
      const updateLikes = [...state.singleBlog.likes, user];
      return { singleBlog: { ...state.singleBlog, likes: updateLikes } };
    }),
  setDislikes: (user) =>
    set((state) => {
      const updateDislikes = state.singleBlog.likes.filter(
        (like) => like !== user
      );
      return { singleBlog: { ...state.singleBlog, likes: updateDislikes } };
    }),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears) => set({ bears: newBears }),
}));
export default useBlogStore;
