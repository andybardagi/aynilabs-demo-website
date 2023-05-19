import { useEffect } from "react";

export const useClickOutside = (className: string, callback: () => void) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!(event.target as Element).classList.contains(className)) {
        callback();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
};
