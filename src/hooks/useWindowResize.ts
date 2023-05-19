import { useEffect } from "react";

export const useWindowResize = (callback: () => void) => {
  useEffect(() => {
    const handleWindowResize = () => {
      callback();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });
};
