import type { NextPage } from "next";
import {useState, Fragment, ChangeEvent, useEffect} from "react";

import type { UserApiResponse } from "./api/user";
import {User} from "../codegen/protos/user_pb";

const App: NextPage = () => {
  const [user, setUser] = useState<User.AsObject>();

  const getUsers = async () => {
    const res = await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify({ id: 1 }),
    });

    const { user } = await res.json();
    setUser(user)
  }

  useEffect(() => {
    getUsers()
  })

  return (
    <>
      <p>{user?.id}</p>
      <p>{user?.name}</p>
      <p>{user?.isAdmin ? "admin" : "normal"}</p>
    </>
  );
};

export default App;
