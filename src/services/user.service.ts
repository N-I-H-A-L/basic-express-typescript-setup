import { GetUserParams } from "../types/user.types";

class UserService {
    async getUser(getUserParams: GetUserParams) {
        const { userId } = getUserParams;
        console.log("ID got ", userId);

        return {
            name: "Nihal",
            email: "nihal@gmail.com",
        }
    }
}

export default new UserService();