import {
  Contact_Us_Table,
  TABLE_EMAIL,
  TABLE_F_NAME,
  TABLE_ID,
  TABLE_L_NAME,
  TABLE_MESSAGE,
} from "../Constants/Table_Contact_Us.js";
import { connection } from "../DBUtil/DB_Utils.js";

export const addInContactUs = (req, res) => {
  const { first_name, last_name, email, message } = req.body;
  // console.log(req.body);
  const qry = `INSERT INTO ${Contact_Us_Table} (${TABLE_F_NAME},${TABLE_L_NAME},${TABLE_EMAIL},${TABLE_MESSAGE}) VALUES ('${first_name}','${last_name}','${email}','${message}');`;
  connection.query(qry, (error, results) => {
    if (error) {
      res.status(500).send({ messege: "Something went wrong", error });
    } else {
      res.status(200).send({
        messege:
          "Thank You For Connecting with us!!! \n Our Representative Will get in touch Shortly",
      });
    }
  });
};

export const getContact = (req, res) => {
  const qry = `select * from ${Contact_Us_Table};`;
  connection.query(qry, (error, results) => {
    if (error) {
      res.status(500).send("Error!!!");
    } else {
      res.status(200).send(results);
    }
  });
};

export const getContactbyid = (req, res) => {
  const { id } = req.params;
  const qry = `select * from ${Contact_Us_Table} where ${TABLE_ID} = ${id} ;`;
  connection.query(qry, (error, results) => {
    if (error) {
      res.status(500).send("Error!!!");
    } else {
      res.status(200).send(results);
    }
  });
};
