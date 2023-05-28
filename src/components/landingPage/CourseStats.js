import "./landingPageCourseContent.css";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CourseIcon from "./CourseIcon";
import { useAmazonContext } from "../../Contexts/AmazonContext";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import CourseContentRow from "./CourseConentRow";
import axios from "axios";

/* Before coding it is important to agree on what each of the stats mean:
numberOfLessons = count of Sections
numberOfVideos = count of Sections that have a youTubeLink
numberOfQuizQuestions = count of examples data set
approxCourseDuration = (timeToCompleteEachLesson*numberOfLessons) + 
                       (timeToCompleteEachTopicQuiz*numberOfTopicsWithSections) + 
                       (addedBufferTime*numberOfTopicsWithSections)
    where timeToCompleteEachLesson = time it takes to complete a Section
    timeToCompleteEachTopicQuiz = time it takes to Complete a Topic Quiz [I am assuming this is the same time for each topic regardless of the number of sections in each Topic because the count of questions in the Topic Quiz is the same regardless of count of sections]
    numberOfTopicsWithSections = count of Topics with Sections
    addedBufferTime = added Time a user might spend on a Topic if a user makes mistakes in sections or Topics
*/

function CourseStats() {
  const { topicDatafromBackEnd, exampleDatafromBackEnd } = useAmazonContext();

  let numberOfLessons = 0;
  let numberOfVideos = 0;
  let numberOfTopicsWithSections = 0;

  for (let i = 0; i < topicDatafromBackEnd.length; i++) {
    numberOfLessons += topicDatafromBackEnd[i].sections.length;
    if (topicDatafromBackEnd[i].sections.length !== 0) {
      //if the topic has a section
      numberOfTopicsWithSections += 1;
      for (let j = 0; j < topicDatafromBackEnd[i].sections.length; j++) {
        if (topicDatafromBackEnd[i].sections[j].sectonYoutubeLink) {
          //count the sections with videos
          numberOfVideos += 1;
        }
      }
    }
  }

  console.log(numberOfLessons);
  console.log(numberOfVideos);
  console.log(numberOfTopicsWithSections);

  console.log(topicDatafromBackEnd);

  let numberOfQuizQuestions = exampleDatafromBackEnd.length;

  console.log(numberOfQuizQuestions);

  let timeToCompleteEachLesson = 2;
  let timeToCompleteEachTopicQuiz = 2;
  let addedBufferTime = 1;

  let approxCourseDuration =
    timeToCompleteEachLesson * numberOfLessons +
    timeToCompleteEachTopicQuiz * numberOfTopicsWithSections +
    addedBufferTime * numberOfTopicsWithSections;

  console.log(approxCourseDuration);

  return (
    <div className="courseStatBanner">
      <div className="courseStat">
        <div className="courseStatImage">
          <img src="https://img.icons8.com/external-outline-wichaiwi/100/1A1A1A/external-questionnaire-statistical-analysis-outline-wichaiwi.png" />
        </div>
        <div className="courseStatDescription">
          <div className="courseStatNumber">{numberOfQuizQuestions}</div>{" "}
          <div className="courseStatName">Quiz Questions</div>
        </div>
      </div>
      <div className="courseStat">
        <div className="courseStatImage">
          <img src="https://img.icons8.com/dotty/100/1A1A1A/saving-book.png" />
        </div>
        <div className="courseStatDescription">
          <div className="courseStatNumber">{numberOfLessons}</div>{" "}
          <div className="courseStatName">Lessons</div>
        </div>
      </div>
      <div className="courseStat">
        <div className="courseStatImage">
          <img src="https://img.icons8.com/ios/100/1A1A1A/video.png" />
        </div>
        <div className="courseStatDescription">
          <div className="courseStatNumber">{numberOfVideos}</div>{" "}
          <div className="courseStatName">Videos</div>
        </div>
      </div>
      <div className="courseStat">
        <div className="courseStatImage">
          <img src="https://img.icons8.com/external-others-iconmarket/100/1A1A1A/external-clock-essential-others-iconmarket-3.png" />{" "}
        </div>
        <div className="courseStatDescription">
          <div className="courseStatNumber">{approxCourseDuration} mins</div>{" "}
          <div className="courseStatName">Approx Course Duration</div>
        </div>
      </div>
    </div>
  );
}

export default CourseStats;
