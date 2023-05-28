import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import TopicData, { allExampleData } from "./TopicData";
import MainSideNav from "./sidebar/MainSideNav";
import { useAmazonContext } from "../Contexts/AmazonContext";
import axios from "axios";

import { Link } from "react-router-dom";
import Button from "./Button";
// import ButtonH2 from "./Buttons";
import Example from "./Example.js";

const glowAnime = keyframes`
0%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}
20%{transform: scale(1.01); background: #fcebeb; box-shadow: 0 0 20px #eb8381;}
50%{transform: scale(1); box-shadow: 0 0 0px rgba(0,0,0,0);}
`;
console.log("Rendered");
const ButtonH2 = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 12px;
  margin-right: "20px";
  text-transform: uppercase;
  /* font-size: 15px; */
  font-size: 2vh;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #fcebeb;
  color: #252525;
  transition: all 0.25s ease;
  cursor: pointer;

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #fcebeb;
  }
`;

const QuizMeButton = styled.button`
  background: red;
  font-family: "Quicksand", sans-serif;
  padding: 7px 12px;
  margin: 20px;
  text-transform: uppercase;
  /* font-size: 15px; */
  font-size: 3vh;
  overflow: hidden;
  border: 0;
  border-radius: 5px;
  background: #eb3535;
  color: white;
  transition: all 0.25s ease;
  cursor: pointer;

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.5);
    background: #f2b1ae;
  }
`;

const TopicTitle = styled.div`
  color: #eb8381;
  /* font-size: 1rem; */
  /* font-size: clamp(4vh, 30px, 30px); */
  /* font-size: min(2rem, 4vh); */
  font-size: 4vh;
  display: block;
  margin: 30px;
  font-family: "Quicksand", sans-serif;

  /* @media (max-width: 40em) {
    font-size: 5vh;
  } */

  /* justify-content: space-between; */
`;

const TopicDescription = styled.div`
  background: #f8f6f0;
  color: #252525;
  /* height: 30vh; */
  /* font-size: 1.2rem; */
  font-size: 2.2vh;

  white-space: pre-line;
  margin: 10px 30px;
  padding: 20px;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;

  font-family: "Quicksand", sans-serif;
  border-radius: 1rem;
  /* padding: 20px; */
`;

const SectionTitle = styled.p`
  color: #eb8381;
  /* font-size: 20px; */
  /* font-size: clamp(3vh, 20px, 20px); */
  font-size: 3vh;
  display: block;
  margin-bottom: 50px;
  font-family: "Quicksand", sans-serif;
`;

const SectionDescription = styled.div`
  /* height: 30vh; */
  /* font-size: 20px; */
  background: #252525;
  color: #f8f6f0;
  font-size: 2vh;
  white-space: pre-line;
  margin: 10px 30px;
  padding: 20px;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
  display: block;
  position: relative;
  align-items: center;
  font-family: "Quicksand", sans-serif;
  border-radius: 1rem;
  /* padding: 20px; */
  animation: ${(props) =>
    props.sectionNumber == props.currentUrlSectionID
      ? css`
          ${glowAnime} 2s
        `
      : "none"};
`;

const NoteTitle = styled.p`
  background: #eb8381;
  align-items: center;
  color: #252525;
  /* font-size: 18px; */
  font-size: 2vh;
  display: inline-block;
  margin-bottom: 10px;
  padding-right: 10px;
  font-family: "Quicksand", sans-serif;
  border-radius: 5px;
`;

const NoteDescription = styled.p`
  /* font-size: 15px; */
  font-size: 2vh;
  margin-left: 30px;
`;

export const Topic = (props) => {
  //set the courseTitle for whatever course the User is on here as well as course landing page in case a user is lands onto a topic page directly
  let {
    courseTitleUserIsOn,
    setCourseTitleUserIsOn,
    courseDetails,
    setCourseDetails,
  } = useAmazonContext();
  useEffect(() => {
    setCourseTitleUserIsOn(props.match.params.courseTitle);
  }, []);
  console.log(courseTitleUserIsOn);
  console.log(props.match.params.courseTitle);
  //set the course Details
  useEffect(() => {
    axios(`/coursesData`).then((response) => {
      console.log(response.data);
      let allCourses = response.data;
      let courseChosen = allCourses.find(
        (o) =>
          o.courseTitle.replace(/\s/g, "") === props.match.params.courseTitle
      );
      setCourseDetails(courseChosen);
    });
  }, [courseTitleUserIsOn]);
  console.log(courseDetails);

  //Examples Data from BackEnd
  const [exampleDatafromBackEnd, setExampleDatafromBackEnd] = useState([]);

  //Obtain Topic Data from back end

  //Topic Data from BackEnd
  const [selectedTopic, setSelectedTopic] = useState([]);

  // let { topicDatafromBackEnd } = useAmazonContext();
  // console.log(topicDatafromBackEnd);

  //Topic to be displayed
  console.log(props.match);
  console.log(props.match.params.topicNumber);

  let topicNumberFromSideBar = props.match.params.topicNumber;
  //Handling%23 in URL
  if (topicNumberFromSideBar.includes("%")) {
    let topicNumberFromSideBarArray = topicNumberFromSideBar.split("%");
    topicNumberFromSideBar = topicNumberFromSideBarArray[0];
  }
  console.log(topicNumberFromSideBar);

  //Set the selected topic
  useEffect(() => {
    axios(
      `/${courseTitleUserIsOn}/topicRESTCAll/${topicNumberFromSideBar}?collectionName=${courseDetails.courseTopicsCollectionName}&modelName=${courseDetails.courseTopicsModelName}`
    ).then((response) => {
      setSelectedTopic(response.data);
      console.log(response.data);
    });
  }, [topicNumberFromSideBar, courseDetails]);

  // let selectedTopic = topicDatafromBackEnd.find(
  //   (o) => o.topicNumber === topicNumberFromSideBar
  // );

  console.log(selectedTopic);
  //End

  useEffect(() => {
    axios(
      `/examplesData?collectionName=${courseDetails.courseExamplesCollectionName}&modelName=${courseDetails.courseExamplesModelName}`
    ).then((response) => {
      setExampleDatafromBackEnd(response.data);
      console.log(response.data);
    });
  }, [topicNumberFromSideBar, courseDetails]);

  // let { exampleDatafromBackEnd } = useAmazonContext();
  console.log(exampleDatafromBackEnd);

  //Obtain Example Data from back end

  // useEffect(() => {
  //   localStorage.setItem(
  //     "topicDatafromBackEnd",
  //     JSON.stringify(topicDatafromBackEnd)
  //   );
  // });

  // useEffect(() => {
  //   localStorage.setItem(
  //     "exampleDatafromBackEnd",
  //     JSON.stringify(exampleDatafromBackEnd)
  //   );
  // });

  // if (topicDatafromBackEnd.length == 0) {
  //   topicDatafromBackEnd = JSON.parse(
  //     localStorage.getItem("topicDatafromBackEnd")
  //   );
  // }

  // if (exampleDatafromBackEnd.length == 0) {
  //   exampleDatafromBackEnd = JSON.parse(
  //     localStorage.getItem("exampleDatafromBackEnd")
  //   );
  // }

  //For page refresh
  //End

  //Code to make a particular section glow
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
  let currentUrlSectionID = topicAndSectionArray[1];
  console.log(currentUrlSectionID);

  // console.log(topicNumberFromSideBar);
  //End

  //To scroll to the top on change of url or scroll to section
  useEffect(() => {
    if (currentUrlSectionID === undefined) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [currentUrl]);

  useEffect(() => {
    if (currentUrlSectionID) {
      const element = document.getElementById(currentUrlSectionID);
      element && element.scrollIntoView();
    }
  });
  console.log(currentUrl);
  //End

  const sectionList = []; //Creates a list of all the sectionNumbers on this topic
  selectedTopic.sections &&
    selectedTopic.sections.map((section) => {
      return sectionList.push(section.sectionNumber);
    });

  console.log(sectionList);

  // Randomiser function to choose an example for a particular section

  const chooseRandomExample = (sectionNumber) => {
    let allSectionExamples =
      exampleDatafromBackEnd.length !== 0 &&
      exampleDatafromBackEnd.filter(
        //list of ALL examples for a particular section in the database
        (example) => example.sectionNumber == sectionNumber
      );
    const random = Math.floor(Math.random() * allSectionExamples.length);
    let selectedExample = allSectionExamples[random];
    return selectedExample;
  };

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

  let needToDisplay = 100;
  let needtoSelect = Math.ceil(needToDisplay / sectionList.length);
  console.log(needtoSelect);

  let selectedSectionExamples = []; //List of selected examples from each section
  let selectedSectionExamplesPool = []; //List of all selected examples from all sections
  let newselectedSectionExamplesPool = []; //Needed this to use the concat logic because concat requires you to store the concatenation into a new variable
  let finalSetOfExamplesToDisplay = []; //final list of examples to display

  // Algorithm for obtaining questions from each section:
  sectionList.map((sectionNumber) => {
    //Mapping through the list of sections that from the Topic
    let allSectionExamples =
      exampleDatafromBackEnd.length !== 0 &&
      exampleDatafromBackEnd.filter(
        //list of ALL examples for a particular section in the database
        (example) => example.sectionNumber == sectionNumber
      );
    console.log(allSectionExamples);
    if (allSectionExamples.length > needtoSelect) {
      selectedSectionExamples = chooseRandom(allSectionExamples, needtoSelect);
      console.log(selectedSectionExamples);
      newselectedSectionExamplesPool = selectedSectionExamplesPool.concat(
        newselectedSectionExamplesPool,
        selectedSectionExamples
      );
    } else {
      newselectedSectionExamplesPool = selectedSectionExamplesPool.concat(
        newselectedSectionExamplesPool,
        allSectionExamples
      );
    }
    console.log(selectedSectionExamplesPool);
    console.log(newselectedSectionExamplesPool);
  });
  console.log(selectedSectionExamplesPool);
  console.log(newselectedSectionExamplesPool);
  if (newselectedSectionExamplesPool.length > needToDisplay) {
    finalSetOfExamplesToDisplay = chooseRandom(
      newselectedSectionExamplesPool,
      needToDisplay
    );
  } else {
    finalSetOfExamplesToDisplay = newselectedSectionExamplesPool;
  }

  console.log(finalSetOfExamplesToDisplay);

  return selectedTopic === "undefined" ||
    selectedTopic === null ||
    selectedTopic.length === 0 ? ( //Needed to add condition because without it, component was rendering and not waiting on selectedTopic from useEffect
    <div>Loading</div>
  ) : (
    <div>
      <MainSideNav
        courseTitleUserIsOn={courseTitleUserIsOn}
        courseDetails={courseDetails}
      ></MainSideNav>
      <TopicTitle id="Topic">
        {selectedTopic.topicNumber} &nbsp; {selectedTopic.topicTitle}
        {selectedTopic.topicYoutubeLink && (
          <a
            href={selectedTopic.topicYoutubeLink}
            style={{ fontSize: 25, marginLeft: "20px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ButtonH2>
              <b>Watch</b>
            </ButtonH2>
          </a>
        )}
        &nbsp; &nbsp;
        <ButtonH2
          onClick={() => {
            let title =
              courseDetails.courseTitle +
              "\nTopic " +
              selectedTopic.topicNumber +
              " - " +
              selectedTopic.topicTitle;
            let text =
              courseDetails.courseTitle +
              "\nTopic " +
              selectedTopic.topicNumber +
              " - " +
              selectedTopic.topicTitle +
              "\n\n" +
              selectedTopic.topicDescription;
            if (navigator.share) {
              navigator.share({
                title: title,
                text: text,
                url: `/#/${courseTitleUserIsOn}/topic/${selectedTopic.topicNumber}`,
              });
            } else {
              navigator.clipboard.writeText(
                `/#/${courseTitleUserIsOn}/topic/${selectedTopic.topicNumber}`
              );
            }
          }}
        >
          <b>share</b>
        </ButtonH2>
      </TopicTitle>
      <TopicDescription>
        <p>{selectedTopic.topicDescription}</p>
        <div style={{ alignSelf: "center" }}>
          <Link
            to={{
              pathname:
                `/${courseTitleUserIsOn}/quiz/` + selectedTopic.topicNumber,
              state: {
                comingFrom: "Topic",
                topicSelectedQuizQuestions: finalSetOfExamplesToDisplay,
                sectionList: sectionList,
              },
            }}
          >
            {selectedTopic.sections.length !== 0 && (
              <QuizMeButton>
                <p style={{ fontSize: "2vh", margin: "0px" }}>
                  I know this topic
                </p>
                <b>Take a Quiz</b>
              </QuizMeButton>
            )}
          </Link>
        </div>
      </TopicDescription>
      <hr
        style={{
          marginTop: 50,
          marginBottom: 50,
          width: "70vw",
          backgroundColor: "#eb8381",
          height: 2,
          borderRadius: 20,
          border: 0,
        }}
      ></hr>

      {selectedTopic.sections &&
        selectedTopic.sections.map((section) => {
          return (
            <div>
              <SectionDescription
                currentUrlSectionID={currentUrlSectionID}
                sectionNumber={section.sectionNumber}
              >
                <SectionTitle id={section.sectionNumber}>
                  <b>
                    {section.sectionNumber} &nbsp; {section.sectionTitle}
                  </b>
                  {section.sectonYoutubeLink && (
                    <a
                      href={section.sectonYoutubeLink}
                      style={{ marginLeft: "20px" }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ButtonH2>
                        <b>Watch</b>
                      </ButtonH2>
                    </a>
                  )}
                  &nbsp; &nbsp;
                  <ButtonH2
                    onClick={() => {
                      let url = decodeURIComponent(
                        `/#/${courseTitleUserIsOn}/topic/${selectedTopic.topicNumber}%23${section.sectionNumber}`
                      );
                      let text =
                        courseDetails.courseTitle +
                        "\nSection " +
                        section.sectionNumber +
                        " - " +
                        section.sectionTitle +
                        "\n\n" +
                        section.sectionDescription +
                        "\n\n" +
                        section.sectionNotes.join(" ");
                      let title =
                        courseDetails.courseTitle +
                        "\nSection " +
                        section.sectionNumber +
                        " - " +
                        section.sectionTitle;
                      if (navigator.share) {
                        navigator.share({
                          title: title,
                          text: text,
                          url: url,
                        });
                      } else {
                        navigator.clipboard.writeText(
                          `/#/${courseTitleUserIsOn}/topic/${selectedTopic.topicNumber}#${section.sectionNumber}`
                        );
                      }
                    }}
                  >
                    <b>share</b>
                  </ButtonH2>
                </SectionTitle>
                <div>
                  <p>{section.sectionDescription}</p>
                </div>
                {
                  /* { Start from here to add notes */
                  section.sectionNotes &&
                    section.sectionNotes.map((sectionNote, index) => {
                      return (
                        <div>
                          <NoteTitle>
                            <div>
                              <b>&nbsp; Note {index + 1}</b>
                            </div>
                          </NoteTitle>
                          <NoteDescription>{sectionNote}</NoteDescription>
                        </div>
                      );
                    })
                }
                <Example
                  topicNumber={topicNumberFromSideBar}
                  section={section.sectionNumber}
                  sectionTitle={section.sectionTitle}
                  sectionExample={chooseRandomExample(section.sectionNumber)}
                ></Example>
              </SectionDescription>
              <hr
                style={{
                  marginTop: 50,
                  marginBottom: 50,
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
      <div>
        <Link
          to={{
            pathname:
              `/${courseTitleUserIsOn}/quiz/` + selectedTopic.topicNumber,
            state: {
              comingFrom: "Topic",
              topicSelectedQuizQuestions: finalSetOfExamplesToDisplay,
              sectionList: sectionList,
            },
          }}
        >
          {selectedTopic.sections.length !== 0 && (
            <QuizMeButton
              style={{
                margin: "0 auto",
                marginBottom: "50px",
                display: "block",
                textDecoration: "none",
              }}
            >
              <b>Take a Quiz</b>
            </QuizMeButton>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Topic;
