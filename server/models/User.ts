import { Schema, model, Types } from 'mongoose';

const schema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  links: [{
    type: Types.ObjectId,
    ref: 'Link',
  }],
});

export const User = model('User', schema);
