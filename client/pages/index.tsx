import type { NextPage } from "next";
import { Fragment } from "react";
import { useQueryUsers } from "../apis/hooks/useApiUser";

const App: NextPage = () => {
  const { data: users, error, isLoading } = useQueryUsers();

  if (isLoading) return  <p>...Loading</p>
  if (error) return  <p>error</p>

  return (
    <div>
      {users.map((user) => (
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
