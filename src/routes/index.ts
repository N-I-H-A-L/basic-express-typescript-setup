import { Router } from "express";
import { USER_ROUTER } from "./user.routes";

export const ROUTER = Router();

ROUTER.use("/users", USER_ROUTER);