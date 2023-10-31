import ErrorMessage from "../components/ErrorMessage";
import Loading from "../components/Loading";
import MovieRow from "../components/MovieRow";
import NavigationBar from "../components/NavigationBar";
import useFetch from "../hooks/useFetch";
import { Table } from "react-bootstrap";

function MoviePage() {
  const { data, loading, errorMessage } = useFetch("movies");

  if (loading) return <Loading />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;

  return (
    <div>
      <NavigationBar />
      <div className="container py-5">
        <h1 className="text-center mb-5">Movies</h1>
        <Table striped borderless hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Year</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((movie, index) => (
              <MovieRow movie={movie} key={movie?.id} index={index} />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MoviePage;
