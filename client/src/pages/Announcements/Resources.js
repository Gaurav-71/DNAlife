import React, { useEffect } from "react";
import "./Announcements.scss";
import Heading from "../../components/Heading/Heading";

import AllDocs from "../../components/Posts/Type4";

import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../actions";

export default function Docs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("Resources"));
  }, []);
  const reducerData = useSelector((state) => state.resourceReducer.resources);
  return (
    <div className="page announcements-page">
      <Heading pageTitle={"Resources and Publications"} />
      <AllDocs data={reducerData} />
    </div>
  );
}
