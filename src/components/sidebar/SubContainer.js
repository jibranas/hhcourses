import React, { useEffect, useState } from "react";
import { useAmazonContext } from "../../Contexts/AmazonContext";
import SideNavRow from "./SideNavRow";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function SubContainer(props) {
  const { subContainerEntries, setSubContainer, courseTitleUserIsOn } =
    useAmazonContext();
  const [currentSectionNumberState, setCurrentSectionNumberState] =
    useState("");

  //Code to set current section state so that it can be used to check which section was clicked to colour code it
  useEffect(() => {
    let currentUrl = window.location.href;
    console.log(currentUrl);
    // setCurrentUrlState(currentUrl);
    let currentUrlArray = currentUrl.split("/");
    console.log(currentUrlArray);
    let topicAndSection = currentUrlArray[currentUrlArray.length - 1];
    console.log(topicAndSection);
    //Handling%23 in URL
    var topicAndSectionArray = [];

    if (topicAndSection.includes("%")) {
      topicAndSectionArray = topicAndSection.split("%23");
    } else {
      topicAndSectionArray = topicAndSection.split("#");
    }
    console.log(topicAndSectionArray);
    let currentSectionNumber = topicAndSectionArray[1];
    console.log(currentSectionNumber);
    setCurrentSectionNumberState(currentSectionNumber);
  }, []);
  //End

  return (
    <div
      className="sub-container"
      style={
        props.state === "entering"
          ? { animation: "moveSubContainer .3s forwards" }
          : props.state === "entered"
          ? { transform: "translateX(0px)" }
          : { animation: "moveSubContainer .3s reverse backwards" }
      }
    >
      <div className="sub-header" onClick={() => setSubContainer(false)}>
        <i class="fas fa-chevron-left"></i> MAIN MENU
      </div>
      {subContainerEntries.map((subEntry) => (
        <>
          <Link to={`/${courseTitleUserIsOn}/topic/${subEntry.topicNumber}`}>
            <div
              className="sidenavContentHeaderSubContainer"
              onClick={props.closeNav}
            >
              {subEntry.topicNumber}&nbsp;&nbsp;{subEntry.title}
            </div>
          </Link>
          {subEntry.entries.map((superEntry) => (
            <HashLink
              to={`/${courseTitleUserIsOn}/topic/${subEntry.topicNumber}#${superEntry.sectionNumber}`}
            >
              <div onClick={props.closeNav}>
                <SideNavRow
                  number={superEntry.sectionNumber}
                  title={superEntry.title}
                  styleVariable={
                    superEntry.sectionNumber == currentSectionNumberState
                      ? { background: "#ebebeb" }
                      : {}
                  }
                />
              </div>
            </HashLink>
          ))}
        </>
      ))}
      <div style={{ minHeight: "60px" }}></div>
    </div>
  );
}
