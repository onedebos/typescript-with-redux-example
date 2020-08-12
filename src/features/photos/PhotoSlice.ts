import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AppThunk } from "./../../index";

export interface PhotoState {
  photos: object[];
  loading: boolean;
  errors: string;
}

const initialState: PhotoState = {
  photos: [],
  loading: false,
  errors: "",
};

const photosSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    setErrors: (state, { payload }: PayloadAction<string>) => {
      state.errors = payload;
    },

    setPhotos: (state, { payload }: PayloadAction<object[]>) => {
      state.photos = payload;
    },
  },
});

export const { setLoading, setErrors, setPhotos } = photosSlice.actions;

export default photosSlice.reducer;

export const photoSelector = (state: { photosStore: PhotoState }) =>
  state.photosStore;

export const getPhotos = (): AppThunk => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    try {
      const baseURL: string = "https://api.nasa.gov/planetary/apod";
      // your apiKey should ideally be in a .env file
      const apiKey = "DE8fsud7knGnE2BZLsKkookQDDZlaIz9YXY6wwpO";
      const res = await axios.get(
        `${baseURL}?api_key=${apiKey}&start_date=2020-05-07&end_date=2020-05-09`
      );
      dispatch(setLoading(false));
      dispatch(setPhotos(res.data));
    } catch (error) {
      dispatch(setErrors(error.message));
      dispatch(setLoading(false));
    }
  };
};
