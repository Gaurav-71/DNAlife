import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Heading from "../Heading/Heading.js";
import Post from "./Post.js";

import { getData } from "../../actions";

import "./posts.scss";

import Empty from "../Empty/Empty.js";

export default function Type1({ title, type }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(type));
  }, []);
  const [ltitle, setLtitle] = useState("Fetching Data ...");
  const reducerData = useSelector((state) =>
    type === "Internships"
      ? state.internshipReducer.education
      : type === "Trainings"
      ? state.trainingReducer.education
      : type === "CertificateCourses"
      ? state.certificateCourseReducer.education
      : type === "EducationalTours"
      ? state.educationTourReducer.activities
      : type === "EcoProjects"
      ? state.ecoProjectReducer.activities
      : type === "PlantationDrives"
      ? state.plantationDriveReducer.activities
      : type === "CleaningMovements"
      ? state.cleaningMovementReducer.activities
      : null
  );
  return (
    <div className="page type1">
      <Heading pageTitle={title} />
      <div className="all-type1-posts">
        {reducerData.length <= 0 ? (
          <Empty />
        ) : (
          reducerData.map((rd) => <Post key={rd._id} data={rd} />)
        )}
      </div>
    </div>
  );
}
