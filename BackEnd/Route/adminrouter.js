import express from "express";
import { Log_In, registerAdmin } from "../Controllers/Admin_controller.js";
import serviceRouter from "./serviceRoute.js";

const adminRouter = express.Router();

adminRouter.post("/", registerAdmin);
adminRouter.post("/login", Log_In);
adminRouter.use('/service',serviceRouter)

export default adminRouter;
