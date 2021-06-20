import { Button, Paper } from "@material-ui/core";
import React from "react";

import announcements from "../../assets/Announcements/announcements.svg";
import trainings from "../../assets/Announcements/training.svg";
import internships from "../../assets/Announcements/internship.svg";
import courses from "../../assets/Announcements/course.svg";
import cleaning from "../../assets/Announcements/cleaning.svg";
import plantation from "../../assets/Announcements/plantation.svg";
import eco from "../../assets/Announcements/eco.svg";
import edu from "../../assets/Announcements/edu.svg";
import doc from "../../assets/Announcements/document.png";
import news from "../../assets/Announcements/newspaper.png";
import resources from "../../assets/Announcements/resources.svg";

import { Link } from "react-router-dom";

export default function Post2({ data }) {
  return (
    <Paper elevation={15} className="post2-container">
      <div className="left">
        <Paper elevation={0} className="img-container">
          {data.type == "Announcements" ? (
            <img src={announcements} alt="icon" />
          ) : data.type == "EducationalTours" ? (
            <img src={edu} alt="icon" />
          ) : data.type == "EcoProjects" ? (
            <img src={eco} alt="icon" />
          ) : data.type == "PlantationDrives" ? (
            <img src={plantation} alt="icon" />
          ) : data.type == "CleaningMovements" ? (
            <img src={cleaning} alt="icon" />
          ) : data.type == "CertificateCourses" ? (
            <img src={courses} alt="icon" />
          ) : data.type == "Trainings" ? (
            <img src={trainings} alt="icon" />
          ) : data.type == "Internships" ? (
            <img src={internships} alt="icon" />
          ) : data.type == "Resources" ? (
            <img src={resources} alt="icon" />
          ) : data.type == "Newss" ? (
            <img src={news} alt="icon" />
          ) : data.type == "Documentations" ? (
            <img src={doc} alt="icon" />
          ) : (
            "Announcement"
          )}
        </Paper>
        <div className="title-details">
          {data.type == "Announcements" ? (
            <h2>{data.title}</h2>
          ) : data.type == "EducationalTours" ? (
            <h2>New Educational Tour Announced</h2>
          ) : data.type == "EcoProjects" ? (
            <h2>New Eco Project Announced</h2>
          ) : data.type == "PlantationDrives" ? (
            <h2>New Plantation Drive Announced</h2>
          ) : data.type == "CleaningMovements" ? (
            <h2>New Cleaning Movement Announced</h2>
          ) : data.type == "CertificateCourses" ? (
            <h2>New Certificate Course Announced</h2>
          ) : data.type == "Trainings" ? (
            <h2>New Training Announced</h2>
          ) : data.type == "Internships" ? (
            <h2>New Internship Announced</h2>
          ) : data.type == "Newss" ? (
            <h2>News Announced</h2>
          ) : data.type == "Resources" ? (
            <h2>New Resource Added</h2>
          ) : data.type == "Documentations" ? (
            <h2>New Document Added</h2>
          ) : (
            "Announcement"
          )}
          <p className="post-date">Posted on {data.date.substring(0, 10)}</p>
        </div>
      </div>
      <div className="line"></div>
      <div className="right">
        <p className="post-desc">
          <div
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          />
        </p>
        <div className="action-btn-container">
          {data.link &&
            data.type != "Announcements" &&
            data.type != "Newss" &&
            data.type != "Documentations" &&
            data.type != "Resources" && (
              <a href={data.link} target="_blank">
                <Button
                  variant="contained"
                  color="secondary"
                  className="register mr"
                >
                  Register
                </Button>
              </a>
            )}
          {data.link && data.type != "Announcements" && (
            <a href={data.link} target="_blank">
              <Button variant="contained" color="secondary" className="view">
                View
              </Button>
            </a>
          )}
          {data.url && data.type != "Announcements" && (
            <a href={data.url} target="_blank">
              <Button variant="contained" color="secondary" className="view">
                Register
              </Button>
            </a>
          )}
          {data.type == "EducationalTours" ? (
            <Link to="/activities/educational-tours/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "EcoProjects" ? (
            <Link to="/activities/eco-projects/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "PlantationDrives" ? (
            <Link to="/activities/plantation-drives/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "CleaningMovements" ? (
            <Link to="/activities/cleaning-movements/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "CertificateCourses" ? (
            <Link to="/education/certificate-courses/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "Trainings" ? (
            <Link to="/education/trainings/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "Internships" ? (
            <Link to="/education/internships/posts">
              <Button variant="contained" className="view ">
                View
              </Button>
            </Link>
          ) : data.type == "Announcements" && data.link != "" ? (
            <a href={data.link} target="_blank">
              <Button variant="contained" className="view mr">
                View
              </Button>
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </Paper>
  );
}
