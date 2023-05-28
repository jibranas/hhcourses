import "./landingPageCourseContent.css";
import React, { useState } from "react";
import styled from "styled-components";
import CourseIcon from "./CourseIcon";
import { useAmazonContext } from "../../Contexts/AmazonContext";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

function CourseContentRow(props) {
  const { entryStore, courseTitleUserIsOn } = useAmazonContext();
  console.log(entryStore);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  // console.log(props.match);
  return props.topic.rows ? (
    <div onClick={() => setSubMenuOpen(!subMenuOpen)}>
      <div className="sidenavContentCC">
        {props.topic.topicNumber}
        &nbsp; &nbsp;
        {props.topic.title}
        <i
          class={
            subMenuOpen
              ? "fas fa-chevron-up toggle-btn"
              : "fas fa-chevron-up toggle-btn-down"
          }
        ></i>
      </div>
      <div
        className={
          subMenuOpen ? "sidenavRow-submenu" : "sidenavRow-submenu-notOpen"
        }
      >
        <Link to={`/${courseTitleUserIsOn}/topic/${props.topic.topicNumber}`}>
          <div className="sidenavRowCC">
            {props.topic.topicNumber}
            &nbsp; &nbsp; Introduction
          </div>
        </Link>
        {props.topic.entries.map((superEntry, index) => {
          return (
            <div>
              {superEntry.entries.map((section, index) => {
                return (
                  <div>
                    <HashLink
                      to={`/${courseTitleUserIsOn}/topic/${props.topic.topicNumber}#${section.sectionNumber}`}
                    >
                      <div className="sidenavRowCC">
                        <div className="sidenavRowTextCC">
                          {section.sectionNumber}
                          &nbsp; &nbsp;
                          {section.title}
                        </div>
                      </div>
                    </HashLink>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    <Link to={`/${courseTitleUserIsOn}/topic/${props.topic.topicNumber}`}>
      <div className="sidenavContentCC">
        {props.topic.topicNumber}
        &nbsp; &nbsp;
        {props.topic.title}
      </div>
    </Link>
  );
}

export default CourseContentRow;
