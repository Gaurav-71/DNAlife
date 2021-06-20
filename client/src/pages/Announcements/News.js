import React, { useEffect } from "react";
import "./Announcements.scss";
import Heading from "../../components/Heading/Heading";

import AllNews from "../../components/Posts/Type4";

import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../actions";

export default function News() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("Newss"));
  }, []);
  const reducerData = useSelector((state) => state.newsReducer.newss);
  return (
    <div className="page announcements-page">
      <Heading pageTitle={"News"} />
      <AllNews data={reducerData} />
    </div>
  );
}
