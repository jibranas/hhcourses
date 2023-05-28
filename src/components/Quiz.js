import React, { useState, useContext, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import TopicData, { allExampleData } from "./TopicData";
import QuizExample from "./QuizExample";
import ScoreCard from "./ScoreCard";
import { ScoreContext, SubmitButtonContext } from "../Contexts/ScoreContext";
import { ButtonH1 } from "./Buttons";
import styled from "styled-components";

const QuizTitle = styled.p`
  color: #eb8381;
  /* font-size: 3vh; */
  font-family: "Quicksand", sans-serif;
  justify-content: center;
  text-align: center;
  /* margin: 30px 30px; */
  display: flex;

  /* justify-content: space-between; */
`;

const SubmitButton = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 12px;
  text-transform: uppercase;
  font-size: 3vh;
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

const Quiz = (props) => {
  const [submitted, setSubmitted] = useState(false);
  const [sumCorrect, setSumCorrect] = useState([]);
  const [whereDidIComeFrom, setWhereDidIComeFrom] = useState("none");
  const location = useLocation(); //Props obtained from Router Link

  const checkSubmission = () => setSubmitted(true);

  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [submitted]);

  // console.log(sumCorrect);

  console.log(whereDidIComeFrom);
  console.log(location.state.comingFrom);

  let selectedQuizQuestions = [];

  if (location.state.comingFrom == "Topic") {
    selectedQuizQuestions = location.state.topicSelectedQuizQuestions;
  } else if (location.state.comingFrom == "Section") {
    selectedQuizQuestions = location.state.sectionSelectedQuizQuestions;
  } else if (location.state.comingFrom == "ScoreCard") {
    selectedQuizQuestions = location.state.scoreCardSelectedQuizQuestons;
  }

  console.log(selectedQuizQuestions);

  return (
    <ScoreContext.Provider value={[sumCorrect, setSumCorrect]}>
      <SubmitButtonContext.Provider value={[submitted, setSubmitted]}>
        <>
          {submitted ? (
            <ScoreCard
              goBackTo={
                location.state.comingFrom == "Topic"
                  ? "Topic"
                  : location.state.section
              } //Used to send section to HashLink
              sections={
                location.state.comingFrom == "Topic"
                  ? location.state.sectionList
                  : location.state.comingFrom == "Section"
                  ? location.state.section
                  : location.state.comingFrom == "ScoreCard"
                  ? location.state.sections
                  : "none"
              }
              comingFrom={
                location.state.comingFrom == "Topic"
                  ? "Topic"
                  : location.state.comingFrom == "Section"
                  ? "Section"
                  : location.state.comingFrom == "ScoreCard"
                  ? "ScoreCard"
                  : "none"
              }
              whereDidIComeFrom={whereDidIComeFrom}
              topicNumber={props.match.params.topicNumber}
              sectionNumber={
                location.state.comingFrom == "Section"
                  ? location.state.section
                  : location.state.comingFrom == "ScoreCard"
                  ? location.state.sectionNumber
                  : "none"
              }
            ></ScoreCard>
          ) : (
            <QuizTitle></QuizTitle>
          )}

          {selectedQuizQuestions.map((example, index) => {
            return (
              <div>
                <QuizExample
                  topicNumber={props.match.params.topicNumber} //Passed from the 'Link' id substitute which is the topicNumber obtained from the Sidebar
                  example={example}
                  exampleIndex={index}
                ></QuizExample>
                <hr
                  style={{
                    width: "70vw",
                    backgroundColor: "#eb8381",
                    height: 2,
                    borderRadius: 20,
                    border: 0,
                  }}
                ></hr>
              </div>
            );
          })}
          {sumCorrect.includes(undefined) == false && //When User has clicked all answers, show button, list of answers should not contain undefined
          sumCorrect.length == selectedQuizQuestions.length &&
          submitted == false ? ( //Button will dissappear when submitted == true
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "30px 0px",
              }}
            >
              <SubmitButton onClick={checkSubmission}>
                <b>Submit</b>
              </SubmitButton>
            </div>
          ) : null}
        </>
      </SubmitButtonContext.Provider>
    </ScoreContext.Provider>
  );
};

export default Quiz;
