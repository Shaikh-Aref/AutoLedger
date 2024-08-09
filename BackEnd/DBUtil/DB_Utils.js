import { createConnection } from "mysql";
import { DB_HOST, DB_NAME, DB_PASS, DB_USER } from "../Constants/DB_constant.js";

export const connection = createConnection({
  database: DB_NAME,
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
});
