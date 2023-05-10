import {  Request, Response} from "express";
import {Document}  from "mongoose"
import userModel, {userDocument} from "../models/user.models";
import { UserInput } from "../schemas/user.schema";

export const signUp = async(req: Request< {}, UserInput["body"]>, res: Response)=>{
  try {
    const created = async(input: Document<Omit<userDocument, "createdAt" | "updatedAt" | "comfirmPassword">>)=>{
      return await userModel.create(input)
    };
    const user = await created(req.body);
    return user
  } catch (error: any) {
    return res.status(409).json({
      message: error.message
    })
  }
};