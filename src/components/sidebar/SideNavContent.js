import React, { useState, useEffect } from "react";
import { useAmazonContext } from "../../Contexts/AmazonContext";
import SideNavRow from "./SideNavRow";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import axios from "axios";

export default function SideNavContent(props) {
  const { courseTitleUserIsOn, entryStore } = useAmazonContext();

  console.log(entryStore);
  console.log(entryStore, courseTitleUserIsOn);
  const [dropDownEntries, setDropDownEntries] = useState(null);

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
  let currentTopicNumber = topicAndSectionArray[0];
  let currentSectionNumber = topicAndSectionArray[1];
  console.log(currentTopicNumber);

  return (
    <div
      className="sideNavContainer"
      style={
        props.state === "exiting"
          ? { animation: "moveMainContainer .3s forwards" }
          : props.state === "entering"
          ? { animation: "moveMainContainer .3s reverse backwards" }
          : null
      }
    >
      {entryStore &&
        entryStore.map((entry, index) => {
          return (
            <div>
              <div className="sidenavContentHeaderMainMenu">
                {entry.topicHeaderNumber && entry.topicHeaderNumber}
                &nbsp; &nbsp;
                {entry.title}
              </div>
              {entry.entries.map((subEntry, index) => {
                return (
                  <div>
                    {subEntry.rows ? (
                      <SideNavRow
                        number={subEntry.topicNumber}
                        title={subEntry.title}
                        entries={subEntry.entries}
                        styleVariable={
                          subEntry.topicNumber == currentTopicNumber
                            ? { background: "#ebebeb" }
                            : {}
                        }
                      />
                    ) : (
                      <Link
                        to={`/${courseTitleUserIsOn}/topic/${subEntry.topicNumber}`}
                      >
                        <div
                          className="sidenavContent"
                          onClick={props.closeNav}
                          style={
                            subEntry.topicNumber == currentTopicNumber
                              ? { background: "#ebebeb" }
                              : {}
                          }
                        >
                          {subEntry.topicNumber && subEntry.topicNumber}
                          &nbsp; &nbsp;
                          {subEntry.title}
                        </div>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      <div style={{ minHeight: "60px" }}></div>
    </div>
  );
}
