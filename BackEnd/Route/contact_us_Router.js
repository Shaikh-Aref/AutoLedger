import express from "express";
import {
  addInContactUs,
  getContact,
  getContactbyid,
} from "../Controllers/Contact_Us_Controller.js";
import { verifyToken } from "../middlware/middle.js";

const contactrouter = express.Router();

contactrouter.post("/",  addInContactUs);
contactrouter.get("/",  getContact);
contactrouter.get("/:id", getContactbyid);

export default contactrouter;
