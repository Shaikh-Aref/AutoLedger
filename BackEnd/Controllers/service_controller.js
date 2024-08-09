import { SERVICE_TABLE_NAME } from "../Constants/Table_Contact_Us.js";
import { connection } from "../DBUtil/DB_Utils.js";

export const fetchCustomer = (req, res) => {
  const qry = `select * from ${SERVICE_TABLE_NAME}`;
  connection.query(qry, (error, results) => {
    if (error) {
      res.status(500).send({ message: "Something wrong" });
    } else {
      res.status(200).send(results);
    }
  });
};

export const saveCustomer = (req, res) => {
  const {
    customer_name,
    vehicle_name,
    last_service_date,
    last_km,
    due_date,
    due_km,
    full_service,
    oil_change,
    washing,
    charges,
  } = req.body;
  const qry = `insert into ${SERVICE_TABLE_NAME}(      
        customer_name,
         vehicle_name,
         last_service_date ,
         last_km,
         due_date,
         due_km,
         full_service,
         oil_change,
         washing,
         charges )values('${customer_name}','${vehicle_name}','${last_service_date}', ${last_km},
    '${due_date}', ${due_km},'${full_service}', '${oil_change}','${washing}', ${charges})`;
  connection.query(qry, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).send({ message: "Something wrong" });
    } else {
      console.log(result);
      res.status(200).send({ message: `Customer Inserted` });
    }
  });
};

export const fetchCustomerByID = (req, res) => {
  const qry = `select * from ${SERVICE_TABLE_NAME} where Sr_No=${req.params.Sr_No}`;
  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "Something wrong" });
    } else {
      if (result.length == 0) {
        res.status(404).send({ messahe: `customer not found` });
      } else {
        res.status(200).send(result[0]);
      }
    }
  });
};

export const removeCustomer = (req, res) => {
  const qry = `delete from ${SERVICE_TABLE_NAME} where Sr_No=${req.params.Sr_No}`;
  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send({ message: "Something wrong" });
    } else {
      res.status(200).send({ message: `customer removed` });
    }
  });
};

export const updateCustomer = (req, res) => {
  const {
    customer_name,
    vehicle_name,
    last_service_date,
    last_km,
    due_date,
    due_km,
    full_service,
    oil_change,
    washing,
    charges,
  } = req.body;
  console.log(req.body);
  const qry = `update ${SERVICE_TABLE_NAME} set customer_name='${customer_name}', vehicle_name = '${vehicle_name}',
     last_service_date = '${last_service_date}', last_km = ${last_km}, due_date = '${due_date}', due_km = ${due_km},
     full_service = '${full_service}', oil_change = '${oil_change}', washing = '${washing}', charges = ${charges} where Sr_No= ${req.params.Sr_No}`;

  connection.query(qry, (error, result) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send({ message: `customer updated` });
    }
  });
};
