import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
    },

    tags: {
      type: [String],
    },
    status: {
      type: String,
    },
    specificCategory: {
      type: String,
    },
    views: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.models?.Blog || mongoose.model('Blog', blogSchema);

export default Blog;
