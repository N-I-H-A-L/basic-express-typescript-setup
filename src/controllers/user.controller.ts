import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
  #userService = userService;

  getUser = async (req: Request, res: Response) => {
    const getUserReq = {
      userId: req.params.userId,
    };

    console.log("REQ ", getUserReq);
    try {
      const user = await this.#userService.getUser(getUserReq);

      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    } catch (err: unknown) {
      console.error("Unable to get user", err);

      if (err instanceof Error) {
        res.status(500).json({ message: "Server error", error: err.message });
      } else {
        res.status(500).json({ message: "Unknown server error" });
      }
    }
  };
}

export default new UserController();
