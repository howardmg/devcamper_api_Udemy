import express from "express";
import dotenv from "dotenv";

// Route files
import { bootcamps } from "./routes/bootcamps.js";

// Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

const logger = (req, res, next) => {
  req.hello = "Hello World";
  console.log("Middleware ran...");
  next();
};

app.use(logger);

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  );
});
