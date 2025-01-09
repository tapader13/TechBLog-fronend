import { connectDb } from '@/lib/db';
import Favorite from '@/lib/favoriteModel';
import User from '@/lib/userModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDb();
    const data = req.body;
    const findUser = await User.findOne({ email: data.userEmail });
    const findFavBlog = await Favorite.findOne({
      user: findUser._id,
      blog: data.blogId,
    });
    if (findFavBlog) {
      return res
        .status(400)
        .json({ message: 'Blog already added to favorite', success: false });
    }
    const favBlog = await Favorite.create({
      user: findUser._id,
      blog: data.blogId,
    });
    res.status(201).json({
      success: true,
      message: 'favorite successfully created',
      favBlog,
    });
  } else if (req.method === 'GET') {
    await connectDb();
    console.log(req.query.email, 12);
    const findUser = await User.findOne({ email: req.query.email });
    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found' });
    }
    const favBlogs = await Favorite.find({ user: findUser._id }).populate(
      'blog'
    );
    res
      .status(200)
      .json({ success: true, favBlogs, message: 'fav blog fetch' });
  } else {
    res.status(405).json({ message: 'method not allowed' });
  }
}
