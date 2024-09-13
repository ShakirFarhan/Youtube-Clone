import React from "react";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../redux/darkModeSlice";

function DarkModeButton() {
  const dispatch = useDispatch();

  return (
    <button
      className="pr-4"
      onClick={() => {
        dispatch(setDarkMode());
      }}
    >
      Switch Theme
    </button>
  );
}

export default DarkModeButton;
