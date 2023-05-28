import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MainSideNav from "../sidebar/MainSideNav";
import Sidenav from "../sidebar/Sidenav";
import SideNavContent from "../sidebar/SideNavContent";
import CourseIcon from "./CourseIcon";
import "./landingPage.css";
import "../sidebar/Sidebar.css";
import CourseContent from "./CourseContent";
import CourseStats from "./CourseStats";
import { useAmazonContext } from "../../Contexts/AmazonContext";
import axios from "axios";
import { Link } from "react-router-dom";

const navBarHeight = 10;

const Navbar = styled.nav`
  background: #eb8381;
  /* top: 80; */
  /* height: ${navBarHeight}vh; */
  transform: translateY(${(props) => props.navTop + "vh"});
  transition: 0.2s;
  display: block;
  justify-content: center;
  align-items: center;

  font-family: Quicksand;
  /* justify-content: space-between; */
`;

const ButtonH2 = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 12px;
  /* margin-right: "20px"; */
  text-transform: uppercase;
  /* font-size: 15px; */
  font-size: 5vh;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #eb3535;
  color: white;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5); */
  transition: all 0.25s ease;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  /* margin-top: 40px; */
  display: block;
  textdecoration: none;

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #f2b1ae;
  }
`;

function CourseLandingPage(props) {
  //set the courseTitle and courseDetails for whatever course the User is on and store in AmazonContext to be used across app
  let {
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
  useEffect(() => {
    //set courseTitle
    setCourseTitleUserIsOn(props.match.params.courseTitle);
  }, []);
  console.log(courseTitleUserIsOn);
  //set the course Details
  useEffect(() => {
    axios(`/coursesData`).then((response) => {
      console.log(response.data);
      let allCourses = response.data;
      let courseChosen = allCourses.find(
        (o) => o.courseTitle.replace(/\s/g, "") === courseTitleUserIsOn
      );
      setCourseDetails(courseChosen);
    });
  }, [courseTitleUserIsOn]);
  console.log(courseDetails);
  // Fetch data for contents as well as stats based on course clicked
  useEffect(() => {
    courseDetails &&
      axios(
        `/${courseTitleUserIsOn}/sideBarData?collectionName=${courseDetails.courseTopicsCollectionName}&modelName=${courseDetails.courseTopicsModelName}`
      ).then((response) => {
        setEntryStore(response.data);
        console.log(response.data);
      });
    courseDetails &&
      axios(
        `/${courseTitleUserIsOn}/topicsData?collectionName=${courseDetails.courseTopicsCollectionName}&modelName=${courseDetails.courseTopicsModelName}`
      ).then((response) => {
        setTopicDatafromBackEnd(response.data);
        console.log(response.data);
      });
    courseDetails &&
      axios(
        `/examplesData?collectionName=${courseDetails.courseExamplesCollectionName}&modelName=${courseDetails.courseExamplesModelName}`
      ).then((response) => {
        setExampleDatafromBackEnd(response.data);
        console.log(response.data);
      });
  }, [courseDetails]);
  console.log(entryStore, topicDatafromBackEnd, exampleDatafromBackEnd);

  //Code for nav to hide scroll down and show on scroll up
  const [navTop, setNavTop] = useState(0);
  var lastScrollY = window.scrollY;
  window.addEventListener("scroll", function () {
    if (lastScrollY < window.scrollY) {
      setNavTop(-{ navBarHeight }); //needs to be same as Nav Height defined above
    } else {
      setNavTop(0);
    }
    lastScrollY = window.scrollY;
  });
  //End

  return courseDetails ? (
    <div>
      <Navbar
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
        }}
        navTop={navTop}
      >
        <div className="navHeader">{courseDetails.courseTitle}</div>
        <Link
          to={`/${courseTitleUserIsOn}/topic/1.1`}
          style={{ margin: "60px" }}
        >
          <ButtonH2> Start</ButtonH2>
        </Link>
      </Navbar>
      <h1 className="courseDescription">{courseDetails.courseDescription}​</h1>

      <div className="courseGoals">
        <div className="courseGoalsHeader">What you get</div>
        <div className="courseGoalsDescription">
          {Object.entries(courseDetails).length === 0 ? ( //UseEffects need to fetch object details and hence object will be empty until useEffect gets data, until then this is empty
            <div>Loading</div>
          ) : (
            courseDetails.courseGoals.map((goal, index) => {
              return <p>{goal}</p>;
            })
          )}
          {/* <p>Understanding of the most important pillar of Islam</p>
          <p>A path to help you achieve Paradise by the Permission of Allah</p>
          <p>A path to help you protect yourself from the Hell Fire</p> */}
        </div>
      </div>
      <CourseStats courseDetails={courseDetails}></CourseStats>
      <CourseContent></CourseContent>

      {/* <img
        style={{ opacity: 0.2 }}
        className="courseImage"
        src="https://www.fluentu.com/blog/arabic/wp-content/uploads/sites/21/2016/09/arabic-apps-1.png"
        alt=""
      ></img> */}
    </div>
  ) : (
    <div>Loading</div>
  );
}

export default CourseLandingPage;
