import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./redux/categorySlice";
import channelSlice from "./redux/channelSlice";
import searchSlice from "./redux/searchSlice";
import videoSlice from "./redux/videoSlice";
import darkModeSlice from "./redux/darkModeSlice";
const store = configureStore({
  reducer: {
    category: categorySlice,
    channel: channelSlice,
    video: videoSlice,
    search: searchSlice,
    darkMode: darkModeSlice,
  },
});
export default store;
