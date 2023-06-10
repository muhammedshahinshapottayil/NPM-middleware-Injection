import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import getuserData from "../utils/getuserData";
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}
export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header("Authorization");
    if (!token) throw new Error("UNAUTHERISED_ACCESS");
    jwt.verify(token, "4Zp:EBnn9i5(rRSk", async (error: any, decoded: any) => {
      if (error) {
        throw new Error("UNAUTHERISED_ACCESS");
      } else {
        const isValid = await getuserData(decoded.data.id);
        if (isValid) {
          req.user = isValid;
          next();
        } else throw new Error("UNAUTHERISED_ACCESS");
      }
    });
  } catch (err) {
    next(err);
  }
};
