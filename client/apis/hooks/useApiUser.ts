import { useQuery } from "@tanstack/react-query";
import { UsersResponse } from "../../codegen/protos/user_pb";
import { userGateway } from "../gateways/UserGateway";

export const useQueryUsers = () => {
  return useQuery<UsersResponse.AsObject["usersList"], Error>({
    queryFn: () => userGateway.findList()
  });
}
