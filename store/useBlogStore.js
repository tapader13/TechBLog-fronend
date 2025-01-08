import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useBlogStore = create(
  persist(
    (set) => ({
      singleBlog: [],
      setLikes: (blogId, user) =>
        set((state) => {
          const findBlog = state.singleBlog.map((blog) =>
            blog._id === blogId
              ? { ...blog, likes: [...blog.likes, user] }
              : blog
          );
          return { singleBlog: findBlog };
        }),
      setDislikes: (blogId, user) =>
        set((state) => {
          const findBlog = state.singleBlog.map((blog) =>
            blog._id === blogId
              ? { ...blog, likes: blog.likes.filter((like) => like !== user) }
              : blog
          );
          return { singleBlog: findBlog };
        }),
      setBlogs: (data) => {
        set(() => ({ singleBlog: data }));
      },
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: 'blog-store', // The key for localStorage
      getStorage: () => localStorage, // Can also use sessionStorage
    }
  )
);

export default useBlogStore;
