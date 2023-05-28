import React, { useState, useContext, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import ButtonH2 from "./Buttons";
import { Link } from "react-router-dom";
import { allExampleData } from "./TopicData";
import { useAmazonContext } from "../Contexts/AmazonContext";

const answerWrongAnime = keyframes`
0%{transform: scale(1)}
20%{transform: scale(1.2)}
50%{transform: scale(1)}
75%{transform: scale(1.2)}
100%{transform: scale(1)}
`;

const answerCorrectAnime = keyframes`
0%{transform: scale(1)}
50%{transform: scale(2)}
100%{transform: scale(1)}
`;

const fadeIn = keyframes`
0%{opacity: 0}
100%{opacity: 1}
`;

const ExampleBox = styled.div`
  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2); */
  border-radius: 5px;
  padding: 10px;
  /* background: #252525; */
  margin-top: 40px;
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
  text-align: center;
  font-family: Quicksand;
  border-radius: 15px;
  padding: 10px;
  color: #252525;
  display: flex;
  background: ${(props) =>
    props.answerClicked == props.answer ? props.answerColor : "#fcebeb"};
  margin-bottom: 10px;
  margin-top: 10px;
  transition: transform 300ms;
  justify-content: center;
  animation: ${(props) =>
    props.answerClicked == props.answer && props.answerColor == "#DAF7A6"
      ? css`
          ${answerCorrectAnime} 1s cubic-bezier(1,-0.74,.42,.57)
        `
      : props.answerClicked == props.answer && props.answerColor == "#ff726f"
      ? css`
          ${answerWrongAnime} 400ms
        `
      : "none"};

  &:hover {
    cursor: pointer;
    box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const AnswerExplanation = styled.div`
  font-size: 2vh;
  display: ${(props) =>
    props.answerClicked == props.answer ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  animation: ${(props) =>
    props.answerClicked == props.answer && props.answerColor == "#DAF7A6"
      ? css`
          shakeY 1s
        `
      : props.answerClicked == props.answer && props.answerColor == "#ff726f"
      ? css`
          fadeIn 1s
        `
      : "none"};
`;

const Example = (props) => {
  console.log(props);
  //Obtain Example Data from back end
  const { exampleDatafromBackEnd, courseTitleUserIsOn } = useAmazonContext();
  console.log(exampleDatafromBackEnd);

  const [answerColor, setAnswerColor] = useState("#fcebeb");
  const [answerClicked, setAnswerClicked] = useState("NoAnswer");
  const [answerClickedToPractice, setAnswerClickedToPractice] = useState(false);

  //Shuffling the answers start - note this seems to be also changing shuffled answers in eg quiz

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const [shuffledAnswersState, setShuffledAnswersState] = useState(
    props.sectionExample && props.sectionExample.answers
  );
  useEffect(() => {
    let shuffledAnswers =
      props.sectionExample && shuffle(props.sectionExample.answers);
    setShuffledAnswersState(shuffledAnswers);
  }, [props.sectionExample]);

  console.log(props.sectionExample && props.sectionExample.answers);

  // Shuffle Answers end

  const checkAnswer = (isCorrect, answer) => {
    setAnswerClicked(answer);
    setAnswerClickedToPractice(true);
    console.log(answerClicked);

    if (isCorrect == true) {
      setAnswerColor("#DAF7A6");

      console.log(answerColor);
    } else {
      setAnswerColor("#ff726f");
    }
  };

  // Randomiser function to create quiz for section

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

  let needToDisplay = 3;
  let selectedSectionExamples = []; //(Will be displayed on the Quiz page for this section)

  // Algorithm for obtaining questions from this section (Will be displayed on the Quiz page for this section):
  let allSectionExamples = exampleDatafromBackEnd.filter(
    (example) => example.sectionNumber == props.section
  );
  if (allSectionExamples.length > needToDisplay) {
    selectedSectionExamples = chooseRandom(allSectionExamples, needToDisplay);
  } else {
    selectedSectionExamples = allSectionExamples;
  }

  console.log(selectedSectionExamples);

  return (
    <ExampleBox>
      <ExampleQuestion>
        {props.sectionExample && props.sectionExample.question}
      </ExampleQuestion>
      {shuffledAnswersState &&
        shuffledAnswersState.map((answerItem) => {
          return (
            <>
              <ExampleAnswer
                onClick={() =>
                  checkAnswer(answerItem.isCorrect, answerItem.answer)
                }
                answerColor={answerColor}
                answer={answerItem.answer}
                answerClicked={answerClicked}
              >
                <p>{answerItem.answer}</p>
              </ExampleAnswer>
              {
                <AnswerExplanation
                  answerClicked={answerClicked}
                  answer={answerItem.answer}
                  answerColor={answerColor}
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
      {/* <div
        style={
          answerClickedToPractice
            ? { display: "block", marginTop: "30px", textAlign: "center" }
            : { display: "none" }
        }
      >
        <Link
          to={{
            pathname:
              `/${courseTitleUserIsOn}/quiz/` +
              props.topicNumber +
              "/" +
              props.section,
            state: {
              comingFrom: "Section",
              sectionSelectedQuizQuestions: selectedSectionExamples,
              section: props.section, //Section number that came from Topic page, could have also used selectionExample's section number
            },
          }}
        >
          <ButtonH2>
            <b style={{ fontSize: "2vh" }}>Practice</b> <br></br>
            <p style={{ fontSize: "1.5vh", margin: "0px" }}>
              {props.sectionTitle}
            </p>
          </ButtonH2>
        </Link>
      </div> */}
    </ExampleBox>
  );
};

export default Example;
