import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { options } from "../utils/Fetch";
import axios from "axios";
const base_url = "https://youtube-v31.p.rapidapi.com";

const initialState = {
  selectedCategory: "Home",
  categoryVideos: [],
  isLoading: false,
  sidebarExtend: false,
};
export const getCategoryVideos = createAsyncThunk(
  "redux/categorySlice",
  async (url) => {
    try {
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
);
const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setSidebarExtendedValue: (state, { payload }) => {
      state.sidebarExtend = payload;
    },
  },
  extraReducers: {
    [getCategoryVideos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getCategoryVideos.fulfilled]: (state, { payload }) => {
      state.categoryVideos = payload;
      state.isLoading = false;
    },
    [getCategoryVideos.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { setSelectedCategory, setSidebarExtendedValue } =
  categorySlice.actions;
export default categorySlice.reducer;
