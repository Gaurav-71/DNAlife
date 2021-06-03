import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Post from "./Post2.js";

import { getData } from "../../actions";

import "./posts.scss";

export default function Type2({ type }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(type));
  }, []);
  const reducerData = useSelector((state) =>
    type === "Announcements" ? state.announcementReducer.announcements : null
  );
  return (
    <div className="page type1">
      <div className="all-type1-posts">
        {reducerData.map((rd) => (
          <Post key={rd._id} data={rd} />
        ))}
      </div>
    </div>
  );
}
