import express from "express";
import dotenv from "dotenv";
import router from "./routes/complaints.routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
// app.use(express.json());
// app.get("/health", (req, res) => {
//   res.status(200).json({ status: "server running" });
// });
app.use("/api/terorist", router);

export default app;
