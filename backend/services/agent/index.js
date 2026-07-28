import dotenv from "dotenv/config";

import express from "express";

import connectDB from "./config/db.js";
import router from "./routes/agent.route.js";

const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.json({ message: "Agent service is running" });
});

app.listen(port, () => {
  console.log(`Agent service started at port ${port}`);
  connectDB();
});
