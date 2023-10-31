import loadingGif from "../assets/loading.gif";

function Loading() {
  return (
    <div className="container d-flex justify-content-center mt-5 pt-5">
      <img src={loadingGif} alt="loading" width={"25%"} />
    </div>
  );
}

export default Loading;
