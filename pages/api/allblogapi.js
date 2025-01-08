import Blog from '@/lib/blogModel';
import { connectDb } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await connectDb();
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
