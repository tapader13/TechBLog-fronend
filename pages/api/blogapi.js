// pages/api/blogapi.js
import Blog from '@/lib/blogModel';
import { connectDb } from '@/lib/db';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Handle preflight requests
  }

  try {
    await connectDb();
    const { query } = req;
    const { id, category, tag, title, specificCategory } = query;

    let blogs = [];

    if (id) {
      const blog = await Blog.findById(id);
      return res.status(200).json(blog);
    }
    if (category) {
      blogs = await Blog.find({
        category: { $regex: new RegExp(`^${category}$`, 'i') },
      });
      return res.status(200).json(blogs);
    }
    if (tag) {
      let tags = tag;
      blogs = await Blog.find({
        tags: { $regex: new RegExp(`^${tags}$`, 'i') },
      });
      return res.status(200).json(blogs);
    }
    if (title) {
      const regexPattern = title
        .split('')
        .map((char) => `[${char}]`)
        .join('.*?');
      const regex = new RegExp(regexPattern, 'i');
      const blogs = await Blog.find({
        title: { $regex: regex },
      });

      return res.status(200).json(blogs);
    }
    if (specificCategory) {
      // console.log(specificCategory, 'specificCategory');
      if (specificCategory === 'recent') {
        blogs = await Blog.find().sort({ createdAt: -1 }); // Sort by most recent
      } else if (specificCategory === 'popular') {
        blogs = await Blog.find().sort({ popularity: -1 }); // Sort by popularity if such field exists
      } else {
        blogs = await Blog.find({ specificCategory });
      }
      return res.status(200).json(blogs);
    }
    // Default case if no specific parameters are provided
    blogs = await Blog.find();
    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching blog(s)', error });
  }
}
