import express from "express";
import uploaddb from "./controllers/upload.js";
import { connect } from "./db/connect.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({
  path: "./env",
});
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "20mb",
  })
);

// app.get("/", (req, res) => {
//   console.log("clicked on home route");
//   res.json({
//     message: "clicked on home page",
//   });
// });

// app.use("/api/auth", userroutes);

app.use("/upload", uploaddb);

app.listen(4000, () => {
  console.log("server is listening on port 3001");
  connect();
});
