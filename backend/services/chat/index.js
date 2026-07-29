import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/chat.routes.js";
import morgan from "morgan";
dotenv.config();

const port = process.env.PORT;

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use("/", router);
app.get("/", (req, res) => {
  res.json({ message: "Chat service is running" });
});

app.listen(port, () => {
  console.log(`Chat service started at port ${port}`);
  connectDB();
});
