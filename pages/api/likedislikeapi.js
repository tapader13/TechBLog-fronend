import Blog from '@/lib/blogModel';
import User from '@/lib/userModel';

export const likeDislikePost = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res
        .status(404)
        .json({ message: 'Blog does not exist!', success: false });
    }
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res
        .status(404)
        .json({ message: 'User does not exist!', success: false });
    }
    if (post.likes.includes(req.user.userId)) {
      const index = post.likes.indexOf(req.user.userId);
      post.likes.splice(index, 1);
      await post.save();

      res.status(200).json({
        message: 'Post disliked successfully!',
        success: true,
        post,
      });
    } else {
      post.likes.push(req.user.userId);
      await post.save();

      res.status(200).json({
        message: 'Post liked successfully!',
        success: true,
        post,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
