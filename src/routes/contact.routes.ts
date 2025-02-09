import { Router } from "express";
import { getContact } from "../controllers/contact.controller";

const router = Router();

router.post("/identify", getContact);

export default router;
