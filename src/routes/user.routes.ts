import { Router } from "express";
import userController from "../controllers/user.controller";

export const USER_ROUTER = Router();

USER_ROUTER.get("/:userId", userController.getUser);