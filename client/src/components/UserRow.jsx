import { Button } from "react-bootstrap";

function UserRow({ user }) {
  return (
    <tr>
      <td>{user?.id}</td>
      <td>{user?.name}</td>
      <td>{user?.email}</td>
      <td>{user?.phone}</td>
      <td>
        <Button variant="light">Detail</Button>
      </td>
    </tr>
  );
}

export default UserRow;
