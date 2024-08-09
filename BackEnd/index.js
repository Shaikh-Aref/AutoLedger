import express from "express";
import { connection } from "./DBUtil/DB_Utils.js";
import contactrouter from "./Route/contact_us_Router.js";
import adminRouter from "./Route/adminrouter.js";
import cors from "cors";

const PORT = 9600;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/aboutus", contactrouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  connection.connect((error) => {
    if (error) {
      console.log("ERROR IN DB CONNECTION !");
      console.log(error);
    } else {
      console.log("Database Connected");
    }
  });
  console.log(`Server Running On ${PORT} Port`);
});
