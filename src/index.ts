import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerUi from "swagger-ui-express";

import { errorMiddleware } from "./middlewares/error.middleware";
import { RegisterRoutes } from "./routes/routes";
import swaggerDocument from "./swagger/swagger.json";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.use(authenticationMiddleware);
RegisterRoutes(app);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Read The Doc  http://localhost:${process.env.PORT}/api-docs`);
});
