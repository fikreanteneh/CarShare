import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import authRouter from "./src/features/auth/auth.route";
import eventRouter from "./src/features/event/event.route";
import meetupRouter from "./src/features/meetup_service/meetup.route";
import { authenticationMidleware } from "./src/middlewares/authentication.middleware";
import { errorMiddleware } from "./src/middlewares/error.middleware";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Carpool With Third Party",
      version: "0.1.0",
      description: "This the first version",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/features/*/*.route.ts"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use(authenticationMidleware);

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Routes
app.use("/v1/auth", authRouter);
app.use("/v1/meetupService", meetupRouter);
app.use("/v1/events", eventRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
