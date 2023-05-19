import { useState, useCallback } from "react";

type OpenCloseType = [
  boolean,
  {
    open: () => void;
    close: () => void;
    toggle: () => void;
  }
];

export const useOpenClose = (initialValue: boolean): OpenCloseType => {
  const [value, setValue] = useState(initialValue);
  // The conditional logic in the following functions is to prevent unnecessary re-renders.
  const open = () => {
    if (!value) setValue(true);
  };
  const close = () => {
    if (value) setValue(false);
  };
  const toggle = () => setValue((prev) => !prev);
  return [value, { open, close, toggle }];
};
