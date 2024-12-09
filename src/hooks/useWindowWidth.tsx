import { useEffect, useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(
    function () {
      function handleWindowWidth() {
        setWindowWidth(window.innerHeight);
      }
      window.addEventListener("resize", handleWindowWidth);

      return () => window.removeEventListener("resize", handleWindowWidth);
    },
    [windowWidth]
  );
  return [windowWidth];
}

export default useWindowWidth;
