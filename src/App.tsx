import SearchBar from "./search-bar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
