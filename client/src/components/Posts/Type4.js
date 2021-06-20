import React from "react";
import Empty from "../Empty/Empty.js";

import Post from "./Post4.js";

import "./posts.scss";

export default function Type4({ data }) {
  return (
    <div className="page type1">
      <div className="all-type1-posts">
        {data.length <= 0 ? (
          <Empty />
        ) : (
          data.map((d) => <Post key={d.title} data={d} />)
        )}
      </div>
    </div>
  );
}
