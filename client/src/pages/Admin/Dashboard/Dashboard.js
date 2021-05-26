import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../../components/AdminHeading/Heading.js";

import announcements from "../../../assets/Admin/Dashboard/undraw_ideas_flow_cy7b.svg";
import education from "../../../assets/Admin/Dashboard/undraw_education_f8ru.svg";
import activities from "../../../assets/Admin/Dashboard/undraw_Organizing_projects_0p9a.svg";

import "./Dashboard.scss";

export default function Dashboard() {
  return (
    <div className="page dashboard-page">
      <Heading elevation={15} pageTitle="Admin Dashboard" />
      <div className="all-admin-cards">
        <Link to="/admin/announcements" elevation={15} className="card">
          <img src={announcements} alt="announcements" />
          <div className="card-content">
            <h2>Announcements</h2>
            <p>
              Create a post to share all relevant updates and announcements
              related to DNAlife{" "}
            </p>
          </div>
        </Link>
        <Link to="/admin/activities" elevation={15} className="card">
          <img src={activities} alt="announcements" />
          <div className="card-content">
            <h2>Activities</h2>
            <p>
              Add a new educational tour, eco project, plantation drive or
              cleaning movement post here and share it with your audience
            </p>
          </div>
        </Link>
        <Link to="/admin/education" elevation={15} className="card">
          <img src={education} alt="announcements" />
          <div className="card-content">
            <h2>Education</h2>
            <p>
              Add a new training, internship or certificate course post here and
              share it with your audience
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
