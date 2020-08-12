import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore, Action } from "@reduxjs/toolkit";
import PhotosSliceReducer from "./features/photos/PhotoSlice";
import { ThunkAction } from "redux-thunk";
import { PhotoState } from "./features/photos/PhotoSlice";

export type AppThunk = ThunkAction<void, PhotoState, unknown, Action<string>>;

const store = configureStore({
  reducer: {
    photosStore: PhotosSliceReducer,
    // anyOtherStore: anyOtherSlice
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
