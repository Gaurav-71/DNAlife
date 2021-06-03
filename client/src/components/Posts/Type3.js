import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post3.js";

import { getData } from "../../actions";

import "./posts.scss";

export default function Type3() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("Photos"));
  }, []);
  const reducerData = useSelector((state) => state.photoReducer.photos);
  return (
    <div className="gallery-posts type1">
      <div className="all-type1-posts">
        {reducerData.map((rd) => (
          <Post key={rd._id} data={rd} />
        ))}
      </div>
    </div>
  );
}
