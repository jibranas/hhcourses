import React, { useState, useContext } from "react";
import {
  QuizState,
  ScoreContext,
  SubmitButtonContext,
} from "../Contexts/ScoreContext";
import styled, { css } from "styled-components";
// import { ButtonH2 } from "./Buttons";
import "./Quiz.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { allExampleData } from "./TopicData";
import { useLocation } from "react-router-dom";
import { useAmazonContext } from "../Contexts/AmazonContext";

const ButtonH2 = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 100px;
  text-transform: uppercase;
  font-size: 2vh;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #eb3535;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  transition: all 0.25s ease;
  cursor: pointer;

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #f2b1ae;
  }
`;

const ScoreCardBorder = styled.div`
  background: ${(props) =>
    props.scorePercentage == 100 ? "#f6ffe6" : "#e8c6c5"};
  font-size: 40px;
  white-space: pre-line;
  margin: 10px 30px;
  padding: 10px;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  display: ${(props) =>
    props.submitted
      ? "flex"
      : "none"}; /* Display score card only when button is clicked, ie. when submitted state is true */
  flex-wrap: wrap;
  position: relative;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  border-radius: 1rem;
  padding: 20px;
`;

const ScoreCardText = styled.p`
  font-size: 3vh;
  font-family: "Quicksand", sans-serif;
  text-align: center;
  font-weight: 900;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ScoreMessage = styled.div`
  font-size: 3vh;
  text-align: center;
  font-weight: 900;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${(props) =>
    props.submitted && props.scorePercentage == 100
      ? css`
          shakeY 1s 1s
        `
      : props.submitted && props.scorePercentage < 100
      ? css`
          shakeX 1s 1s
        `
      : "none"};

  @media (max-width: 1200px) {
    flex-basis: 100%;
    margin-bottom: 20px;
  }
`;

const ScoreCardButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1200px) {
    flex-basis: 100%;
    margin-top: 30px;
  }
`;

const ScoreCard = (props) => {
  //Obtain Example Data from back end
  const { exampleDatafromBackEnd, courseTitleUserIsOn } = useAmazonContext();
  console.log(exampleDatafromBackEnd);

  const [sumCorrect, setSumCorrect] = useContext(ScoreContext);
  const [scoreCardColour, setScoreCardColour] = useState("#f8f8f8");
  const [submitted, setSubmitted] = useContext(SubmitButtonContext);
  const location = useLocation(); //Props obtained from Router Link

  const sum = sumCorrect.reduce(function (a, b) {
    return a + b;
  }, 0);

  const scorePercentage = Math.round((sum / sumCorrect.length) * 100);

  let sectionID = props.goBackTo; //depricated, now using backToStudiesHashLinkPath
  let backToStudiesHashLinkPath =
    props.comingFrom == "Topic"
      ? `/${courseTitleUserIsOn}/topic/${props.topicNumber}`
      : props.comingFrom == "Section"
      ? `/${courseTitleUserIsOn}/topic/${props.topicNumber}#${props.sectionNumber}`
      : props.comingFrom == "ScoreCard" && props.sections.constructor == Array //Same logic as used in the quiz algorithm to figure out if it needs to go back to a topic or section
      ? `/${courseTitleUserIsOn}/topic/${props.topicNumber}`
      : props.comingFrom == "ScoreCard"
      ? `/${courseTitleUserIsOn}/topic/${props.topicNumber}#${location.state.sectionNumber}`
      : "none";
  let morePracticeHashLinkPath =
    props.comingFrom == "Topic"
      ? `/${courseTitleUserIsOn}/quiz/${props.topicNumber}`
      : props.comingFrom == "Section"
      ? `/${courseTitleUserIsOn}/quiz/${props.topicNumber}/${props.sectionNumber}`
      : props.comingFrom == "ScoreCard" && props.sections.constructor == Array
      ? `/${courseTitleUserIsOn}/quiz/${props.topicNumber}`
      : props.comingFrom == "ScoreCard"
      ? `/${courseTitleUserIsOn}/quiz/${props.topicNumber}/${location.state.sectionNumber}`
      : "none";

  // if (scorePercentage == 100) {
  //   setScoreCardColour("#ff726f");
  // } else {
  //   setScoreCardColour("#DAF7A6");
  // }

  //Keeping the quiz ready if a user hits try again , same algorithm to find questions if coming from the Topic or a Section.

  // Randomiser function to create quiz for all topics

  const chooseRandom = (arr, num) => {
    const res = [];
    for (let i = 0; i < num; ) {
      const random = Math.floor(Math.random() * arr.length);
      if (res.includes(arr[random])) {
        continue;
      }
      res.push(arr[random]);
      i++;
    }
    return res;
  };

  // Number of questions display properties
  console.log(props.comingFrom);
  console.log(props.sections);
  console.log(props.topicNumber);
  console.log(props.sectionNumber);
  let needToDisplay = 5;
  let needtoSelect = Math.ceil(needToDisplay / props.sections.length);

  let selectedSectionExamples = []; //List of selected examples from each section
  let selectedSectionExamplesPool = []; //List of all selected examples from all sections
  let finalSetOfExamplesToDisplay = []; //final list of examples to display
  let finalExamplesOutput = []; //finalOutput of examples

  // Algorithm for obtaining questions from each section:
  if (props.comingFrom == "Topic") {
    props.sections.map((sectionNumber) => {
      //Mapping through the list of sections that from the Topic
      let allSectionExamples = exampleDatafromBackEnd.filter(
        //list of ALL examples for a particular section in the database
        (example) => example.sectionNumber == sectionNumber
      );
      if (allSectionExamples.length > needtoSelect) {
        selectedSectionExamples = chooseRandom(
          allSectionExamples,
          needtoSelect
        );
        selectedSectionExamplesPool.push.apply(
          selectedSectionExamplesPool,
          selectedSectionExamples
        );
      } else {
        selectedSectionExamplesPool.push.apply(
          selectedSectionExamplesPool,
          allSectionExamples
        );
      }
    });
    if (selectedSectionExamplesPool.length > needToDisplay) {
      finalSetOfExamplesToDisplay = chooseRandom(
        selectedSectionExamplesPool,
        needToDisplay
      );
      finalExamplesOutput = finalSetOfExamplesToDisplay;
    } else {
      finalSetOfExamplesToDisplay = selectedSectionExamplesPool;
      finalExamplesOutput = finalSetOfExamplesToDisplay;
    }
  } else if (props.comingFrom == "Section") {
    let allSectionExamples = exampleDatafromBackEnd.filter(
      (example) => example.sectionNumber == props.sections
    );
    if (allSectionExamples.length > needToDisplay) {
      selectedSectionExamples = chooseRandom(allSectionExamples, needToDisplay);
      finalExamplesOutput = selectedSectionExamples;
    } else {
      selectedSectionExamples = allSectionExamples;
      finalExamplesOutput = selectedSectionExamples;
    }
  } else if (props.comingFrom == "ScoreCard") {
    //If someone were to click Try Again from the score card, I was having a hard time trying to make the code determine which of the two logic above (Topic or Section) to run.
    //If the quiz is rerun by clicking try again from score card, i need to determine whether the quiz is Topic or Section. Because Topic and Section have their own logic of running the quiz randomniser, I know that if its coming from Topic it will be an array and if it is coming form sections it is a list therefore i will run my logic based on that
    if (props.sections.constructor == Array) {
      props.sections.map((sectionNumber) => {
        //Mapping through the list of sections that from the Topic
        let allSectionExamples = exampleDatafromBackEnd.filter(
          //list of ALL examples for a particular section in the database
          (example) => example.sectionNumber == sectionNumber
        );
        if (allSectionExamples.length > needtoSelect) {
          selectedSectionExamples = chooseRandom(
            allSectionExamples,
            needtoSelect
          );
          selectedSectionExamplesPool.push.apply(
            selectedSectionExamplesPool,
            selectedSectionExamples
          );
        } else {
          selectedSectionExamplesPool.push.apply(
            selectedSectionExamplesPool,
            allSectionExamples
          );
        }
      });
      if (selectedSectionExamplesPool.length > needToDisplay) {
        finalSetOfExamplesToDisplay = chooseRandom(
          selectedSectionExamplesPool,
          needToDisplay
        );
        finalExamplesOutput = finalSetOfExamplesToDisplay;
      } else {
        finalSetOfExamplesToDisplay = selectedSectionExamplesPool;
        finalExamplesOutput = finalSetOfExamplesToDisplay;
      }
    } else {
      let allSectionExamples = exampleDatafromBackEnd.filter(
        (example) => example.sectionNumber == props.sections
      );
      if (allSectionExamples.length > needToDisplay) {
        selectedSectionExamples = chooseRandom(
          allSectionExamples,
          needToDisplay
        );
        finalExamplesOutput = selectedSectionExamples;
      } else {
        selectedSectionExamples = allSectionExamples;
        finalExamplesOutput = selectedSectionExamples;
      }
    }
  }

  console.log(finalSetOfExamplesToDisplay);
  console.log(selectedSectionExamples);

  const restartQuiz = () => {
    setSubmitted(false);
    setSumCorrect([]);
  };

  return (
    <ScoreCardBorder submitted={submitted} scorePercentage={scorePercentage}>
      {scorePercentage == 100 ? (
        <ScoreMessage submitted={submitted} scorePercentage={scorePercentage}>
          <p
            style={{
              color: "green",
              display: "inline",
              fontSize: "50px",
              margin: "0 10px 0 0",
            }}
          >
            ✓
          </p>
          <p>Congratulations you got them all right!</p>
        </ScoreMessage>
      ) : (
        <ScoreMessage submitted={submitted} scorePercentage={scorePercentage}>
          <p
            style={{
              color: "#ff726f",
              display: "inline",
              fontSize: "50px",
              margin: "0 10px",
            }}
          >
            ✖
          </p>
          <p>Not quite there yet!</p>
        </ScoreMessage>
      )}

      <div>
        <ScoreCardText>Score</ScoreCardText>
        {sum}/{sumCorrect.length}
      </div>
      <div>
        <ScoreCardText>Percentage</ScoreCardText>
        {scorePercentage}%
      </div>
      <ScoreCardButtons>
        <Link
          to={{
            pathname: morePracticeHashLinkPath,
            state: {
              comingFrom: "ScoreCard",
              sections: props.sections,
              scoreCardSelectedQuizQuestons: finalExamplesOutput,
              sectionNumber: props.sectionNumber, //Retains the section number to pass where needed
            },
          }}
        >
          <ButtonH2 style={{ marginBottom: 20 }} onClick={restartQuiz}>
            More Practice
          </ButtonH2>
        </Link>

        <HashLink to={backToStudiesHashLinkPath}>
          <ButtonH2>Back to Studies</ButtonH2>
        </HashLink>
      </ScoreCardButtons>
    </ScoreCardBorder>
  );
};

export default ScoreCard;
