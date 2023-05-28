import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { ButtonH2 } from "./Buttons";
import { ScoreContext, SubmitButtonContext } from "../Contexts/ScoreContext";
import { HashLink } from "react-router-hash-link";
import { useAmazonContext } from "../Contexts/AmazonContext";

const fadeIn = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`;

const ExampleBox = styled.div`
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  background: #252525;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 100px;
  margin-bottom: 100px;
  font-family: "Quicksand", sans-serif;
`;

const ExampleQuestion = styled.div`
  /* font-size: 17px; */
  font-size: 2.5vh;
  font-weight: bold;
  text-align: center;
  color: #eb8381;
  padding: 20px;
`;

const ExampleAnswer = styled.div`
  font-size: 2.2vh;
  border-radius: 15px;
  padding: 10px;
  text-align: center;
  display: flex;
  background: ${(props) =>
    props.answerClicked == props.answer && props.submitted
      ? props.answerColor
      : props.answerClicked == props.answer
      ? "#b8b8b8"
      : "#fcebeb"};
  margin-bottom: 10px;
  margin-top: 10px;
  transition: transform 300ms;
  justify-content: center;
  pointer-events: ${(props) => (props.submitted ? "none" : "auto")};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const AnswerExplanation = styled.div`
  font-size: 2vh;
  color: #f8f6f0;
  display: ${(props) =>
    props.answerClicked == props.answer && props.submitted ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const QuizExample = (props) => {
  const { courseTitleUserIsOn } = useAmazonContext();
  const [sumCorrect, setSumCorrect] = useContext(ScoreContext);
  const [submitted, setSubmitted] = useContext(SubmitButtonContext);

  const [answerColor, setAnswerColor] = useState("#fcebeb");
  const [answerClicked, setAnswerClicked] = useState("NoAnswer");
  const [answerClickedToPractice, setAnswerClickedToPractice] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("noSelection");

  // Issue: when i click on try again, if the same quiz example came up after re-render, it would show as already clicked due to code : props.answerClicked == props.answer
  //  ? "#DFDFDF". In order to tackle it, this logic says, when try again is clicked
  //(indicatied by sumCorrect becoming 0) AND when value of submitted changes (in this case from true to false when try agian button is clicked)  only then should the code set all answers to no answer and prevent any highlight logic to take place.
  // Both conditons were needed, else didnt produced required result as can be seen if you tried to remove length==0 logic

  useEffect(() => {
    if (sumCorrect.length == 0) {
      setAnswerClicked("NoAnswer");
    }
  }, [submitted]);

  const checkAnswer = (isCorrect, answer) => {
    setAnswerClicked(answer);
    setAnswerClickedToPractice(true);

    if (isCorrect == true) {
      setAnswerColor("#DAF7A6");
      setSelectedAnswer(true);
      pushCorrectAnswer(props.exampleIndex);
      console.log(props.exampleIndex);
    } else {
      setAnswerColor("#ff726f");
      setSelectedAnswer(false);
      pushWrongAnswer(props.exampleIndex);
    }
  };

  function pushCorrectAnswer(index) {
    const newAnswerList = [...sumCorrect];
    newAnswerList[index] = 1;
    setSumCorrect(newAnswerList);
    console.log(sumCorrect);
  }

  function pushWrongAnswer(index) {
    const newAnswerList = [...sumCorrect];
    newAnswerList[index] = 0;
    setSumCorrect(newAnswerList);
    console.log(sumCorrect);
  }

  return (
    <ExampleBox>
      <ExampleQuestion>{props.example.question}</ExampleQuestion>
      {props.example.answers.map((answerItem) => {
        return (
          <>
            <ExampleAnswer
              onClick={() =>
                checkAnswer(answerItem.isCorrect, answerItem.answer)
              }
              answerColor={answerColor}
              answer={answerItem.answer}
              answerClicked={answerClicked}
              submitted={submitted}
              sumCorrect={sumCorrect}
            >
              <p>{answerItem.answer}</p>
            </ExampleAnswer>
            {
              <AnswerExplanation
                answerClicked={answerClicked}
                answer={answerItem.answer}
                answerColor={answerColor}
                selectedAnswer={selectedAnswer}
                submitted={submitted}
              >
                {answerItem.explanation ? (
                  <>
                    <p
                      style={{
                        color: "red",
                        display: "inline",
                        fontSize: "25px",
                        margin: "0 10px",
                      }}
                    >
                      ✖
                    </p>
                    <p
                      style={{
                        display: "inline",
                      }}
                    >
                      {answerItem.explanation}
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      style={{
                        color: "green",
                        display: "inline",
                        fontSize: "25px",
                        margin: "0 10px 0 0",
                      }}
                    >
                      ✓
                    </p>{" "}
                    <p>Correct!</p>
                  </>
                )}
              </AnswerExplanation>
            }
          </>
        );
      })}
      <div
        style={
          answerClickedToPractice && submitted
            ? { display: "block", marginTop: "30px", textAlign: "center" }
            : { display: "none" }
        }
      >
        <HashLink
          to={`/${courseTitleUserIsOn}/topic/${props.topicNumber}#${props.example.sectionNumber}`}
        >
          {" "}
          {/* Hashlink to go back to the specific Section on the Topic page*/}
          <ButtonH2>Study this Lesson</ButtonH2>
        </HashLink>
      </div>
    </ExampleBox>
  );
};

export default QuizExample;
