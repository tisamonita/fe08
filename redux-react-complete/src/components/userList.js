import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../redux/slices/userSlice";

function UserList() {
  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchUsers());
  };
  return (
    <>
      <h2>User List</h2>
      <p> Total users: {users.length} </p>
      <button onClick={handleClick}>Fetch Users</button>
      <div>
        {users.length === 0 && <p>No users found</p>}
        {users.length &&
          users.map((user) => (
            <div key={user.id}>
              <p>Name: {user.name} </p>
              <p>Email: {user.email} </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default UserList;