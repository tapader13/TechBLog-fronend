import Blog from '@/lib/blogModel';
import { connectDb } from '@/lib/db';
import User from '@/lib/userModel';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    await connectDb();
    try {
      console.log(req.query.id, req.query.userEmail, 111);
      const blog = await Blog.findById(req.query.id);
      if (!blog) {
        return res
          .status(404)
          .json({ message: 'Blog does not exist!', success: false });
      }
      const user = await User.findOne({ email: req.query.userEmail });
      if (!user) {
        return res
          .status(404)
          .json({ message: 'User does not exist!', success: false });
      }
      if (blog.likes.includes(user._id)) {
        const index = blog.likes.indexOf(user._id);
        blog.likes.splice(index, 1);
        await blog.save();

        res.status(200).json({
          message: 'Blog disliked successfully!',
          success: true,
          blog,
          userId: user._id,
        });
      } else {
        blog.likes.push(user._id);
        await blog.save();

        res.status(200).json({
          message: 'Blog liked successfully!',
          success: true,
          blog,
          userId: user._id,
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
