import { ObjectId } from "mongodb";
import { Subjects } from "../subjects/Subjects";
export interface UsercreatedEvents {
  subject: Subjects.userCreated;
  data: {
    id?: ObjectId;
    username?: string;
    password?: string;
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
  };
}
