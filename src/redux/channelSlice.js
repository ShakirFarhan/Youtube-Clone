import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { options } from "../utils/Fetch";
const base_url = "https://youtube-v31.p.rapidapi.com";
const initialState = {
  channelVideos: [],
  isLoading: false,
  channelDetails: "",
};
export const getChannelVideos = createAsyncThunk(
  "redux/getChannelDetails",
  async (url) => {
    try {
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
);
export const getChannelDetails = createAsyncThunk(
  "redux/getChannelVideos",
  async (url) => {
    try {
      const { data } = await axios.get(`${base_url}/${url}`, options);
      return data.items[0];
    } catch (error) {
      console.log("error in getChannelVideos thunk");
    }
  }
);
export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {},
  extraReducers: {
    [getChannelVideos.pending]: (state) => {
      state.isLoading = true;
    },
    [getChannelVideos.fulfilled]: (state, { payload }) => {
      state.channelVideos = payload;
      state.isLoading = false;
    },
    [getChannelVideos.rejected]: (state) => {
      console.log("request rejected");
    },
    [getChannelDetails.pending]: (state) => {
      state.isLoading = true;
    },
    [getChannelDetails.fulfilled]: (state, { payload }) => {
      state.channelDetails = payload;
      state.isLoading = false;
    },
    [getChannelDetails.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default channelSlice.reducer;
