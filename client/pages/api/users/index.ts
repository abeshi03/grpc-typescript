import { NextApiRequest, NextApiResponse } from "next";
import { credentials, ServiceError } from "@grpc/grpc-js";

import { UserManagerClient } from "../../../codegen/protos/user_grpc_pb";
import { UsersRequest, UsersResponse } from "../../../codegen/protos/user_pb";

const Request = new UsersRequest();
const Client = new UserManagerClient(
  "localhost:50051",
  credentials.createInsecure()
);

export type GetUsersResponse =
  | { ok: true; users: UsersResponse.AsObject["usersList"] }
  | { ok: false; error: ServiceError };

export default function getUsers(
  req: NextApiRequest,
  res: NextApiResponse<GetUsersResponse>
) {
  Client.getUsers(Request, (grpcErr, grpcRes) => {
    if (grpcErr) {
      res.status(500).json({ ok: false, error: grpcErr });
    } else {
      const users = grpcRes.getUsersList().map((user) => user.toObject());
      res.status(200).json({ ok: true, users })
    }
  });
}
