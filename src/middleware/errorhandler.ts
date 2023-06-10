import { Request, Response, NextFunction } from "express";
import { custErr } from "../errors/custErr";
export const errorhandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof custErr)
    return res.status(err.statusCode).json({ errors: err.serializeError() });

  return res.status(500).json({
    errors: [{ message: err.message ?? "Something went wrong" }],
  });
};
