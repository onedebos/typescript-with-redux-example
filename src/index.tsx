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
    // anyOtherStore: anyOtherSlice,
    // middleware: ['array of middlewares'],
  devTools: process.env.NODE_ENV !== "development" ? false : true, //disable redux dev tools in PROD
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
