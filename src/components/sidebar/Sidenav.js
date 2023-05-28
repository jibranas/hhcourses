import React from "react";
import "./Sidebar.css";
import SideNavContent from "./SideNavContent";
import { Transition } from "react-transition-group";
import SubContainer from "./SubContainer";
import { useAmazonContext } from "../../Contexts/AmazonContext";

export default function Sidenav(props) {
  let {
    subContainer,
    courseTitleUserIsOn,
    setCourseTitleUserIsOn,
    courseDetails,
    setCourseDetails,
    topicDatafromBackEnd,
    setTopicDatafromBackEnd,
    exampleDatafromBackEnd,
    setExampleDatafromBackEnd,
    entryStore,
    setEntryStore,
  } = useAmazonContext();
  return (
    <div
      className="sidenav"
      style={
        props.state === "entering"
          ? { animation: "moveSideBar .3s forwards" }
          : props.state === "entered"
          ? { transform: "translateX(-0px)" }
          : { animation: "moveSideBar .3s reverse backwards" }
      }
    >
      <div className="sidenavHeader">{courseDetails.courseTitle}</div>
      <Transition in={!subContainer} timeout={300} unmountOnExit mountOnEnter>
        {(state) => <SideNavContent state={state} closeNav={props.click} />}
      </Transition>
      <Transition in={subContainer} timeout={300} unmountOnExit mountOnEnter>
        {(state) => <SubContainer state={state} closeNav={props.click} />}
      </Transition>
    </div>
  );
}
