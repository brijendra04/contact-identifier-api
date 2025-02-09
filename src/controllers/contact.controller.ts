import { Request, Response } from "express";
import { identifyContact } from "../services/contact.service";

export const getContact = async (req: Request, res: Response) => {
  const { phone, email } = req.body;
  const contacts = await identifyContact(phone, email);
  res.json({ contacts });
};
