import { connectDb } from '@/lib/db';
import User from '@/lib/userModel';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    await connectDb();
    const data = req.body;
    console.log(data, 121);
    const findUser = await User.findOne({ email: data.email });
    if (findUser) {
      const user = await User.updateOne(
        {
          email: data.email,
        },
        {
          $set: {
            email: data.email,
            image: data.image,
            name: data.name,
          },
        }
      );
      res
        .status(201)
        .json({ success: true, data: user, message: 'user created' });
    } else {
      const user = await User.create({
        username: data.username,
        email: data.email,
        image: data.image,
      });
      console.log(user, 67);
      res
        .status(201)
        .json({ success: true, data: user, message: 'user created' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
