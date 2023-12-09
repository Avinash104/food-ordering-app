import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  name: {type: String},
  email: {type: String, required: true, unique: true},
  phone: {type: String},
  password: {type: String},
  image: {type: String},
}, {timestamps: true});

export const Agent = models?.Agent || model('Agent', UserSchema);