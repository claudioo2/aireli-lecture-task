import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { PlatformUser } from "@enterprise-commerce/core/platform/types"
import { createUser } from "../models/User"

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;
  const newUser: PlatformUser = {
    id: null,
    email,
    password
  };
  try {
      const createdUser = await createUser( newUser)

      res.status(201).json({
        id: createdUser.id,
        email: createdUser.email,
        message: "New user created"
      })


  } catch (err) {
    console.error(err);
    res.status(400).send(err.message);
  }


  // please finish this function

};