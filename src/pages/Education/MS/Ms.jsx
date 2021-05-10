import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {EnvelopeIcon, PhoneIcon} from "react-line-awesome";

import "./Ms.scss";

import Heading from "../../../components/Heading/Heading";

import univ from "../../../assets/MS/univ.jpg";
import high from "../../../assets/MS/high.jpg";
import course from "../../../assets/MS/course.jpg";
import why from "../../../assets/MS/why.jpg";

import fatima from "../../../assets/Team/fatima.jpg";
import malali from "../../../assets/Team/malali.jpg";
import nathan from "../../../assets/MS/nathan.jpg";

const useStyles = makeStyles({
  root: {
    width: 300,
    backgroundColor: "#1e1e1e"
  },
  media: {
    height: 170,
  },
});

export default function Ms(){
  const classes = useStyles();
  return(
    <div className="page ms-page">
      <Heading elevation={15} pageTitle="Master of Science (MS) Program" />
      <div className="description">
        <div className="left"></div>
        <article >
          <h1>Nelson Institute for Environmental Studies</h1>
          <p>We are confronting global environmental challenges through imaginative research that transcends disciplinary boundaries, hands-on education that bridges classrooms and communities, and public programs that foster environmental conversations among people from business, government, academia, and advocacy.
          We are a home to three interdisciplinary research centers that serve
          as laboratories and incubators to solve today's most challenging environmental. </p>
      </article>
      </div>
      <div className="all-cards">
      <Card elevation={5} className={classes.root}>
          <CardMedia
              className={classes.media}
              image={high}
              title="MS Program Details"
          />
          <div className="card-content">
            <h1>Course Highlights</h1>
            <ul>
              <li>The MS program spans 15 months:
June through December - Courses in Madison,
Wisconsin, at Nelson Institute, USA</li>
              <li>January through August - Online program of
courses from Madison, and research work in
June, July and August with DNA Life in India</li> 
  <li>We help you to craft your dream project
and learn with the pioneers in the field
to make the world a better place</li>
            </ul>
          </div>
        </Card>
        <Card elevation={5} className={classes.root}>
          <CardMedia
              className={classes.media}
              image={course}
              title="MS Program Details"
          />
          <div className="card-content">
            <h1>Objectives</h1>
            <ul>
              <li>To provide green skills and global
              opportunities to students' community</li>
              <li>To act as catalytic platform to revive
              rainforests in India and other tropical
              countries</li>
              <li>To bridge knowledge across the world on
              environment and sustainable living</li>
            </ul>
          </div>
        </Card>
        <Card elevation={5} className={classes.root}>
          <CardMedia
              className={classes.media}
              image={why}
              title="MS Program Details"
          />
          <div className="card-content">
            <h1>Why this course ?</h1>
            <ul>
              <li>Hands-on, fast-paced, targeted coursework</li>
              <li>Affordable program, partial fellowships available</li>
              <li>Global network of conservation organizations
and professional partners</li>
<li>Practical learning with professional
development and lasting global relationships</li>
            </ul>
          </div>
        </Card>
        <Card elevation={5} className={classes.root}>
          <CardMedia
              className={classes.media}
              image={univ}
              title="MS Program Details"
          />
          <div className="card-content">
            <h1>Know More</h1>
            <ul>
              <li>
                <a href="https://nelson.wisc.edu/" target="_blank">Visit institute website</a>
              </li>
              <li>
                <a href="https://nelson.wisc.edu/graduate/" target="_blank">View all graduate courses</a>
              </li>
              <li>
                <a href="https://nelson.wisc.edu/contact/" target="_blank">Contact Institute</a>
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="admissions">
        <h1>Admissions</h1>
        <p>We offer interdisciplinary graduate degree programs for students with exceptional interest in researching and solving the most pressing environmental challenges. Please contact the following for admissions.</p>
        <div className="all-admins">
          <div className="admin">
            <img src={fatima} alt="admission officer"/>
            <div className="admin-details">
              <h1 className="name">Fatima Tuz Zehra</h1>
              <div className="position">Admission Coordinator</div>
              <div className="contact"><PhoneIcon className="custom-icon" /><a href="tel:+919911064915">+91-9911064915</a></div>
              <div className="email"><EnvelopeIcon className="custom-icon" /><a href="mailto:info@dnalife.org">info@dnalife.org</a></div>
            </div>
          </div>
          <div className="admin">
            <img src={malali} alt="admission officer"/>
            <div className="admin-details">
              <h1 className="name">Malali Gowda</h1>
              <div className="position">Program Director</div>
              <div className="contact"><PhoneIcon className="custom-icon" /><a href="tel:+919901002211">+91-9901002211</a></div>
              <div className="email"><EnvelopeIcon className="custom-icon" /><a href="mailto:info@dnalife.org">info@dnalife.org</a></div>
            </div>
          </div>
          <div className="admin">
            <img src={nathan} alt="admission officer"/>
            <div className="admin-details">
              <h1 className="name">Nathan chulfer</h1>
              <div className="position">Program Director</div>
              <div className="contact"></div>
              <div className="email"><EnvelopeIcon className="custom-icon" /><a href="mailto:enviropros@nelson.wisc.edu">enviropros@nelson.wisc.edu</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
