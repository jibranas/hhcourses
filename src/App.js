import React, { useState } from "react";
// import Button from './components/Button.js'
// import Header from './components/Header.js'
// import Sidebar from './components/Sidebar.js'
// import "./components/sidebar/Sidebar.css";
import Topic from "./components/Topic";
import Quiz from "./components/Quiz";
import Button from "./components/Button";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import MainSideNav from "./components/sidebar/MainSideNav";
import CourseMenu from "./components/landingPage/CourseMenu";
import CourseLandingPage from "./components/landingPage/CourseLandingPage";
import CourseContent from "./components/landingPage/CourseContent";
import CourseStats from "./components/landingPage/CourseStats";

function App() {
  return (
    <Router>
      {/* <MainSideNav></MainSideNav> */}

      <Switch>
        <Route path="/" exact component={CourseMenu} />
        <Route path="/:courseTitle/topic/:topicNumber" component={Topic} />
        <Route path="/:courseTitle/quiz/:topicNumber" component={Quiz} />
        <Route path="/:courseTitle/start" component={CourseLandingPage} />
      </Switch>
    </Router>
  );

  // return (
  //     <>
  //     <div>
  //     <Router>
  //     <Sidebar></Sidebar>
  //     </Router>

  //     </div>
  //     </>
  // )
}

export default App;
