import React, { useState } from "react";
import styled from "styled-components";
import "./landingPage.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function CourseIcon(props) {
  return (
    <div className="courseIconAndTitle">
      <img className="courseImage" src={props.img} alt=""></img>
      <Link to={`/${props.title.replace(/\s/g, "")}/start`}>
        {" "}
        <h3>{props.title}</h3>
      </Link>
    </div>
  );
}

export default CourseIcon;
