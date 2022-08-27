import type { NextPage } from "next";
import { useState, useEffect, Fragment } from "react";

import { User } from "../codegen/protos/user_pb";
import { GetUsersResponse } from "./api/users";

const App: NextPage = () => {
  const [ users, setUsers ] = useState<User.AsObject[]>([]);

  const getUsers = async (): Promise<void> => {
    try {
      const res = await fetch("/api/users");
      const json: GetUsersResponse = await res.json();
      if (json.ok) {
        setUsers(json.users)
      }
    } catch (error: unknown) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      {users?.map((user) => (
        <Fragment key={user.id}>
          <p>{user.name}</p>
          <p>{user.isAdmin}</p>
          <p>--------------------</p>
        </Fragment>
      ))}
    </div>
  );
};

export default App;
