import SearchBar from "./search-bar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Pokemon from "./Pokemon/Pokemon";
import "./App.css";

function App() {
  let [x, setX] = useState("Hello");

  return (
    <div className="" style={{ height: "100vh" }}>
      <div style={{ margin: "4px" }}>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <div className="card-text">
              <SearchBar x={x} />
            </div>
          </div>
        </div>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <div className="card-text d-flex flex-column align-items-center text-center">
              <Pokemon />
            </div>
          </div>
        </div>
        <div className="card bg-light mb-3">
          <div className="card-body">
            <div className="card-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
