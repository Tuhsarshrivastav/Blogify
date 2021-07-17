import dotenv from "dotenv";
import express from "express";
import cors from "cors";
const app = express();
dotenv.config();

//imports
import Connected from "./config/db.js";
import Route from "./routes/route.js";

//Db config
Connected();

// middlewares
app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//Routers
app.use("/", Route);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
