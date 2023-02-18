import { Schema, model, models } from 'mongoose';

let randomNumber = function () {
  return Math.floor(Math.random() * 900000) + 100000;
};

const userSchema = new Schema(
  {
    membershipId: {
      type: String,
      default: randomNumber,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// userSchema.set('timestamps', true);

const User = models.User || model('User', userSchema);

export default User;
