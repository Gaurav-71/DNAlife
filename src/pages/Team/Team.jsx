import React from 'react';

import {Members} from "./All";
import Heading from "../../components/Heading/Heading";

import "./Team.scss";


import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import malali from "../../assets/Team/malali.jpg";


const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    backgroundColor: "#1e1e1e"
  },
  media: {
    height: 300,
  },
}));

export default function Team(){
  const classes = useStyles();
  return(
    <div className="page">
      <Heading pageTitle={"Team"} />
      <section className="members-wraps">
            {Members.map((member, index) => {
              return (
                <Card elevation={10} className={classes.root} key={index}>
                <div className="details">
                  <h1>{member.name}</h1>
                  <h4>{member.position}</h4>
                </div>
                <CardMedia
                  className={classes.media}
                  image={member.src}
                  title={member.name}
                />
              </Card>
              );
            })}
            </section>
    </div>
  );
}

