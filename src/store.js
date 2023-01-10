import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./redux/categorySlice";
import channelSlice from "./redux/channelSlice";
import searchSlice from "./redux/searchSlice";
import videoSlice from "./redux/videoSlice";
const store = configureStore({
  reducer: {
    category: categorySlice,
    channel: channelSlice,
    video: videoSlice,
    search: searchSlice,
  },
});
export default store;
