import mongoose from 'mongoose';
const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    blog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Blog',
    },
  },
  {
    timestamps: true,
  }
);
const Favorite =
  mongoose.models?.Favorite || mongoose.model('Favorite', favoriteSchema);
export default Favorite;
