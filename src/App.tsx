import React, { useEffect } from "react";
import { photoSelector, getPhotos } from "./features/photos/PhotoSlice";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const { photos, loading, errors } = useSelector(photoSelector);

  console.log(photos, loading, errors);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return <div className="App">Hello world</div>;
}

export default App;
