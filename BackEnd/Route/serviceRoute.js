import express from "express";
import {
  fetchCustomer,
  fetchCustomerByID,
  removeCustomer,
  saveCustomer,
  updateCustomer,
} from "../Controllers/service_controller.js";

const serviceRouter = express.Router();

serviceRouter.get("/", fetchCustomer);
serviceRouter.post("/", saveCustomer);
serviceRouter.get("/:Sr_No", fetchCustomerByID);
serviceRouter.delete("/:Sr_No", removeCustomer);
serviceRouter.put("/:Sr_No", updateCustomer);

export default serviceRouter;
