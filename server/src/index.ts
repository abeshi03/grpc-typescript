import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import { UserManagerService } from "../codegen/protos/user_grpc_pb";
import { User, UsersRequest, UsersResponse } from "../codegen/protos/user_pb";

// 実際には DB のような永続層から取得するはず
const users: User.AsObject[] = [
  {
    id: 1,
    name: "kohei",
    isAdmin: true
  },
  {
    id: 2,
    name: "maho",
    isAdmin: false
  },
  {
    id: 3,
    name: "akira",
    isAdmin: false
  }
]

function getUsers(
  call: ServerUnaryCall<UsersRequest, UsersResponse>,
  callback: sendUnaryData<UsersResponse>
) {
  const usersResponse = users.map((user) => {
    return new User().setId(user.id).setName(user.name).setIsAdmin(user.isAdmin);
  });

  const response = new UsersResponse();
  response.setUsersList(usersResponse);
  callback(null, response);
}

function startServer() {
  const server = new Server();
  server.addService(UserManagerService, { getUsers });
  server.bindAsync(
    "0.0.0.0:50051",
    ServerCredentials.createInsecure(),
    (error, port) => {
      if (error) {
        console.error(error);
      }
      server.start();
      console.log(`server start listing on port ${port}`);
    }
  );
}

startServer();
