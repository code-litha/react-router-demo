import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import NavigationBar from "../components/NavigationBar";
import UserRow from "../components/UserRow";
import useFetch from "../hooks/useFetch";
import { Table } from "react-bootstrap";

function HomePage() {
  const { data, loading, errorMessage } = useFetch("users");

  if (loading) return <Loading />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  return (
    <div>
      <NavigationBar />
      <div className="container py-5">
        <h1 className="text-center mb-5">Users</h1>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <UserRow user={user} key={user?.id} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default HomePage;
