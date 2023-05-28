import "./landingPageCourseContent.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CourseIcon from "./CourseIcon";
import { useAmazonContext } from "../../Contexts/AmazonContext";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import CourseContentRow from "./CourseConentRow";
import axios from "axios";

function CourseContent() {
  const { courseTitleUserIsOn, courseDetails, entryStore } = useAmazonContext();
  console.log(entryStore);
  console.log(courseTitleUserIsOn);
  console.log(courseDetails);

  return (
    <div className="courseContent">
      <div className="courseContentHeader">Course Content</div>
      {entryStore &&
        entryStore.map((entry, index) => {
          return (
            <div>
              <div className="sidenavContentHeaderMainMenuCC">
                {entry.topicHeaderNumber && entry.topicHeaderNumber}
                &nbsp; &nbsp;
                {entry.title}
              </div>
              {entry.entries.map((subEntry, index) => {
                return (
                  <div>
                    <CourseContentRow topic={subEntry}></CourseContentRow>
                  </div>
                );
              })}
            </div>
          );
        })}
    </div>
  );
}

export default CourseContent;
