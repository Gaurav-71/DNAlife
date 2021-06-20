import React from "react";

import Post from "./Post4.js";

import "./posts.scss";

export default function Type4({ data }) {
  return (
    <div className="page type1">
      <div className="all-type1-posts">
        {data.map((d) => (
          <Post key={d.title} data={d} />
        ))}
      </div>
    </div>
  );
}
