import { UsersResponse } from "../../codegen/protos/user_pb";
import axios, { AxiosResponse } from "axios";
import { GetUsersResponse } from "../../pages/api/users";

class UserGateway {
  public async findList(): Promise<UsersResponse.AsObject["usersList"]> {
    const res: AxiosResponse<GetUsersResponse> = await axios.get("/api/users");
    if (!res.data.ok) {
      throw new Error
    }
    return res.data.users;
  }
}

export const userGateway = new UserGateway();
