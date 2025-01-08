import Blog from '@/lib/blogModel';
import { connectDb } from '@/lib/db';

export default async function handler(req, res) {
  if (req.method === 'PATCH') {
    await connectDb();
    const { id } = req.body;
    console.log(req.body, 12);
    const blog = await Blog.findByIdAndUpdate(
      id,
      //   { $set: { views: 5 } },
      { $inc: { views: 1 } },
      { new: true }
    );
    console.log(blog, 67);
    res.status(200).json({ blog });
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
