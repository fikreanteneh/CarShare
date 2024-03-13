import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import authRouter from "./src/features/auth/auth.route";
import profileRouter from "./src/features/profile/profile.route";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Routes
app.use("/v1/auth", authRouter);
app.use("/v1/profile", profileRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
