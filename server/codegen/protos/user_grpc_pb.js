// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var protos_user_pb = require('../protos/user_pb.js');

function serialize_UserRequest(arg) {
  if (!(arg instanceof protos_user_pb.UserRequest)) {
    throw new Error('Expected argument of type UserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserRequest(buffer_arg) {
  return protos_user_pb.UserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UserResponse(arg) {
  if (!(arg instanceof protos_user_pb.UserResponse)) {
    throw new Error('Expected argument of type UserResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UserResponse(buffer_arg) {
  return protos_user_pb.UserResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersRequest(arg) {
  if (!(arg instanceof protos_user_pb.UsersRequest)) {
    throw new Error('Expected argument of type UsersRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersRequest(buffer_arg) {
  return protos_user_pb.UsersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_UsersResponse(arg) {
  if (!(arg instanceof protos_user_pb.UsersResponse)) {
    throw new Error('Expected argument of type UsersResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_UsersResponse(buffer_arg) {
  return protos_user_pb.UsersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserManagerService = exports.UserManagerService = {
  getUsers: {
    path: '/UserManager/GetUsers',
    requestStream: false,
    responseStream: false,
    requestType: protos_user_pb.UsersRequest,
    responseType: protos_user_pb.UsersResponse,
    requestSerialize: serialize_UsersRequest,
    requestDeserialize: deserialize_UsersRequest,
    responseSerialize: serialize_UsersResponse,
    responseDeserialize: deserialize_UsersResponse,
  },
  getUser: {
    path: '/UserManager/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: protos_user_pb.UserRequest,
    responseType: protos_user_pb.UserResponse,
    requestSerialize: serialize_UserRequest,
    requestDeserialize: deserialize_UserRequest,
    responseSerialize: serialize_UserResponse,
    responseDeserialize: deserialize_UserResponse,
  },
};

exports.UserManagerClient = grpc.makeGenericClientConstructor(UserManagerService);
