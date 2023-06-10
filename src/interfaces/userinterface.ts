import mongoose, { ObjectId } from "mongoose";
export default interface User {
  username: string;
  password: string;
  role?: string;
  forgetPassword?: string;
  premium?: boolean;
  wishList?: { _id: ObjectId }[];
  c_profile?: {
    name?: string;
    address?: string;
    regno?: string;
    website?: string;
    profilePicture?: string;
  };
  u_profile?: {
    name?: string;
    gender?: string;
    address?: string;
    place?: string;
    domain?: string;
    experience?: string;
    contact?: string;
    profilePicture?: string;
  };
  currentstatus?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

interface userModel extends mongoose.Model<userDoc> {
  build(attrs: User): userDoc;
}

interface userDoc extends mongoose.Document {
  username: string;
  password: string;
  role?: string;
  forgetPassword?: string;
  premium?: boolean;
  wishList?: { _id: ObjectId }[];
  c_profile?: {
    name?: string;
    address?: string;
    regno?: string;
    website?: string;
    profilePicture?: string;
  };
  u_profile?: {
    name?: string;
    gender?: string;
    address?: string;
    place?: string;
    domain?: string;
    experience?: string;
    contact?: string;
    profilePicture?: string;
  };
  currentstatus?: string;
  status?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export { userDoc, userModel };
