import { forwardRef, useEffect, useRef, useState } from "react";

const SearchBar = (props: any) => {
  const [count, setCount] = useState(0);

  //TODO:123 swap this
  //Code to implement clt + k open search box wip
  let searchBoxRef = useRef<HTMLInputElement>(null);

  const keyDownHandler = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === "k") {
      searchBoxRef.current?.focus();
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    //cleanup code
    return () => window.removeEventListener("keydown", keyDownHandler);
  });

  return (
    <>
      <div className="d-flex justify-content-between m-5">
        {/* <h1>Vite + React</h1> */}
        <div className="d-flex ">
          <input
            className="form-control"
            type="text"
            placeholder="Press CLTRL + K to search"
            ref={searchBoxRef}
          />
          <button
            className="btn btn-primary"
            onClick={() => setCount((count) => count + 1)}
          >
            Search
          </button>
        </div>
        {/* <h1>Vite + React</h1> */}
      </div>
    </>
  );
};

export default SearchBar;
