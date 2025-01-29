import SearchBar from "./search-bar/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  let [x, setX] = useState("Hello");

  return (
    <div className="" style={{ height: "100vh" }}>
      <div>
        <SearchBar x={x} />
      </div>
    </div>
  );
}

export default App;
