import { useEffect, useRef } from "react";

//TODO:123:: use this to remove
const useMapKeyboard = () => {
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
};

export default useMapKeyboard;
