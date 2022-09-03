// package: 
// file: protos/user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as protos_user_pb from "../protos/user_pb";

interface IUserManagerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IUserManagerService_IGetUsers;
    getUser: IUserManagerService_IGetUser;
}

interface IUserManagerService_IGetUsers extends grpc.MethodDefinition<protos_user_pb.UsersRequest, protos_user_pb.UsersResponse> {
    path: "/UserManager/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_pb.UsersRequest>;
    requestDeserialize: grpc.deserialize<protos_user_pb.UsersRequest>;
    responseSerialize: grpc.serialize<protos_user_pb.UsersResponse>;
    responseDeserialize: grpc.deserialize<protos_user_pb.UsersResponse>;
}
interface IUserManagerService_IGetUser extends grpc.MethodDefinition<protos_user_pb.UserRequest, protos_user_pb.UserResponse> {
    path: "/UserManager/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<protos_user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<protos_user_pb.UserRequest>;
    responseSerialize: grpc.serialize<protos_user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<protos_user_pb.UserResponse>;
}

export const UserManagerService: IUserManagerService;

export interface IUserManagerServer extends grpc.UntypedServiceImplementation {
    getUsers: grpc.handleUnaryCall<protos_user_pb.UsersRequest, protos_user_pb.UsersResponse>;
    getUser: grpc.handleUnaryCall<protos_user_pb.UserRequest, protos_user_pb.UserResponse>;
}

export interface IUserManagerClient {
    getUsers(request: protos_user_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: protos_user_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: protos_user_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    getUser(request: protos_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserManagerClient extends grpc.Client implements IUserManagerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUsers(request: protos_user_pb.UsersRequest, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: protos_user_pb.UsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: protos_user_pb.UsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UsersResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: protos_user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: protos_user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: protos_user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
