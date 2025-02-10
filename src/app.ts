import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ROUTER } from "./routes";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/", (req: Request, res: Response) => {
    res.send("Server is working");
});

app.use("/api", ROUTER);

export default app;
