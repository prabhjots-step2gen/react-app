import { useState } from "react";

function SearchBar({ x }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="d-flex justify-content-between m-5">
        <h1>Vite + React</h1>
        <div className="d-flex ">
          <input
            className="form-control"
            type="text"
            placeholder="Press CLTRL + K to search"
          />
          <button
            className="btn btn-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            Search
          </button>
        </div>
        <h1>Vite + React</h1>
      </div>
    </>
  );
}

export default SearchBar;
