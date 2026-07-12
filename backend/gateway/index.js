import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy";

dotenv.config();

const port = process.env.port || 8000;

const app = express();

// app.use(express.json());
app.use("/auth", proxy(process.env.AUTH_SERVICE));

app.get("/", (req, res) => {
  res.json({ message: "Gateway is running" });
});

app.listen(port, () => {
  console.log(`Gateway Started at PORT ${port}`);
});
