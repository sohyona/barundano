import React from "react";
import "./Sticky.css";
import { Link, withRouter } from "react-router-dom";

function Sticky({ path }) {
  return (
    <Link to={path}>
      <div className="sticky">다음</div>
    </Link>
  );
}

export default withRouter(Sticky);
