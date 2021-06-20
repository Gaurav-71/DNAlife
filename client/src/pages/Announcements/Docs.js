import React, { useEffect } from "react";
import "./Announcements.scss";
import Heading from "../../components/Heading/Heading";

import AllDocs from "../../components/Posts/Type4";

import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../actions";

export default function Docs() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData("Documentations"));
  }, []);
  const reducerData = useSelector(
    (state) => state.documentationReducer.documentations
  );
  const data = [
    {
      title: "DNA Life: Afforestation Objective",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Afforestation%20Objective.pdf",
    },
    {
      title: "Afforestation of Barren Rocky Land",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Afforestation%20of%20Barren%20Rocky%20Land.pdf",
    },
    {
      title: "Audit of Work",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Audit%20of%20work.pdf",
    },
    {
      title: "Benefits of the work done",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Benefits.pdf",
    },
    {
      title: "Capacity building and connecting people",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/capacity%20building.pdf",
    },
    {
      title: "DNA Life Climate change and reforestation",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/DNA%20Life_Climate%20change%20and%20reforestation%20document.pdf",
    },
    {
      title: "DNA Life Document Part-1",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/DNA%20Life%20Document%201.pdf",
    },
    {
      title: "DNA Life Document Part-2",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/DNA%20Life%20Document%202.pdf",
    },
    {
      title: "DNA LIFE POSTER",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/DNA%20life%20poster.pdf",
    },
    {
      title: "GOK, Biodiversity Board Annual Report 2007 - 08",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/GOK,%20Biodiversity%20Board%20Annual-Report-2007-08.pdf",
    },
    {
      title: "Major climatic change addressing presentation",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Major%20climatic%20change%20addressing.pptx.pdf",
    },
    {
      title: "Map of Anuganalu and Hassan District",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Map%20of%20Anuganalu%20and%20Hassan%20District.pdf",
    },
    {
      title: "Replication of work",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Replication%20of%20work.pptx.pdf",
    },
    {
      title: "Scalable and Outreach.",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Scalable.pdf",
    },
    {
      title: "BCRT Work 2000 - 2015.",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/BCRT%20Work%202000%20-%202015.pdf",
    },
    {
      title: "DNA Life May 2019",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/DNA%20Life%20May%202019.pdf",
    },
    {
      title: "Procedure for Plantation Drives.",
      path:
        "http://old.dnalife.org/DNA_Life_Organisation/File_for_website/Procedure%20for%20Plantation%20Drives.pdf",
    },
    // { title: "", path: "" },
  ];
  return (
    <div className="page announcements-page">
      <Heading pageTitle={"Documentation"} />
      <AllDocs data={reducerData} />
    </div>
  );
}
