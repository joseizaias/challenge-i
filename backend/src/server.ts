import "reflect-metadata";
import cors from "cors";
import express from "express";

import "./database";
import { routes } from "./services/routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log("Server is running on port 3333!");
});
