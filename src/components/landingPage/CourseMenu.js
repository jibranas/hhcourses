import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CourseIcon from "./CourseIcon";

function CourseMenu() {
  const [coursesDisplayed, setCoursesDisplayed] = useState([]);
  useEffect(() => {
    axios(`/coursesData`).then((response) => {
      setCoursesDisplayed(response.data);
      console.log(response.data);
    });
  }, []);
  console.log(coursesDisplayed);

  return (
    <div>
      {coursesDisplayed.map((course, index) => {
        return (
          <CourseIcon
            img="https://www.fluentu.com/blog/arabic/wp-content/uploads/sites/21/2016/09/arabic-apps-1.png"
            title={course.courseTitle}
          ></CourseIcon>
        );
      })}
    </div>
  );
}

export default CourseMenu;
