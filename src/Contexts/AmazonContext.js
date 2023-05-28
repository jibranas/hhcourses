import React, { useContext, useState, useEffect } from "react";
import SidebarData from "../components/SidebarData";
import axios from "axios";

export const AmazonContext = React.createContext();

export function useAmazonContext() {
  return useContext(AmazonContext);
}

export function AmazonContextProvider(props) {
  //Responsible for opening and closing the sub container
  const [subContainer, setSubContainer] = useState(false);
  //Responsible for storing the subContainers entries
  const [subContainerEntries, setSubContainerEntries] = useState(null);
  //Responsible for holding all of the data that goes into the navbar
  const [entryStore, setEntryStore] = useState(null);
  //Topic Data from BackEnd
  const [topicDatafromBackEnd, setTopicDatafromBackEnd] = useState([]);
  //Examples Data from BackEnd
  const [exampleDatafromBackEnd, setExampleDatafromBackEnd] = useState([]);
  //TopicNumbers List from BackEnd
  const [topicNumbersListfromBackEnd, setTopicNumbersListfromBackEnd] =
    useState([]);
  //Responsible for holding course Title
  const [courseTitleUserIsOn, setCourseTitleUserIsOn] = useState("");
  console.log(courseTitleUserIsOn);
  //Responsible for holding course Title
  const [courseDetails, setCourseDetails] = useState({});
  console.log(courseDetails);
  //To call TopicsData from the backend which will return all topics to the front end
  useEffect(() => {
    axios(`/${courseTitleUserIsOn}/topicsData`).then((response) => {
      setTopicDatafromBackEnd(response.data);
      console.log(response.data);
    });
  }, []);

  //To call ExamplesData from the backend which will return all topics to the front end
  useEffect(() => {
    axios("/examplesData").then((response) => {
      setExampleDatafromBackEnd(response.data);
    });
  }, []);

  //To call ExamplesData from the backend which will return all examples to the front end
  useEffect(() => {
    axios(`/${courseTitleUserIsOn}/sideBarData`).then((response) => {
      setEntryStore(response.data);
    });
  }, []);

  //To call TopicNumbers from the backend which will return all topics numbers to the front end
  useEffect(() => {
    axios(`/${courseTitleUserIsOn}/topicNumbersList`).then((response) => {
      setTopicNumbersListfromBackEnd(response.data);
    });
  }, []);

  // useEffect(() => {
  //   fetch("https://amazon-navbar.herokuapp.com/fetch")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setEntryStore(response);
  //       // console.log(response);
  //     });
  // }, []);

  // New Code

  // const SidebarData = [
  //   {
  //     entries: [
  //       {
  //         topicNumber: "1.1",
  //         title: "The purpose of this course",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "1.2",
  //         title: "Qalimah",
  //         rows: false,
  //       },
  //     ],
  //     _id: "60ab69680a5705404d68d9f9",
  //     title: "Why Arabic?",
  //     topicHeaderNumber: "1",
  //     type: {
  //       _id: "61a049aaad966900153a0659",
  //       rows: true,
  //       dropDown: false,
  //     },
  //   },
  //   {
  //     entries: [
  //       {
  //         topicNumber: "2.1.1",
  //         title: "Ism Muntharif",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.1.2",
  //         title: "Gair Muntharif Asma",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.1.3",
  //         title: "Mabni Asma",
  //         rows: false,
  //       },
  //     ],
  //     _id: "60ab69ee0a5705404d68d9fc",
  //     title: "I'araab",
  //     topicHeaderNumber: "2.1",
  //     type: {
  //       _id: "61a049aaad966900153a065a",
  //       rows: true,
  //       dropDown: false,
  //     },
  //   },
  //   {
  //     entries: [
  //       {
  //         topicNumber: "2.2.1",
  //         title: "Mu’annath",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.2.2",
  //         title: "Mu’anath Haqeeqi",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.2.3",
  //         title: "Mu’anath Gair Haqeeqi",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "1.2.1.1",
  //         title: "Mua’nath Alamati",
  //         rows: true,
  //         entries: [
  //           {
  //             topicNumber: "1.2.1.1",
  //             title: "Mua’nath Alamati",
  //             entries: [
  //               {
  //                 sectionNumber: "1.2.1.1.1",
  //                 title: "Gol Ta ة",
  //               },
  //               {
  //                 sectionNumber: "1.2.1.1.2",
  //                 title: "Alif Mamdoodah اء",
  //               },
  //               {
  //                 sectionNumber: "1.2.1.1.3",
  //                 title: "Alif Maqthoorah اى",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         topicNumber: "2.2.4",
  //         title: "Mua’nath Samai",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.2.5",
  //         title: "How to convert Muthakkar to Mu’anath",
  //       },
  //     ],
  //     _id: "60ab6a260a5705404d68d9fd",
  //     title: "Jins",
  //     topicHeaderNumber: "2.2",
  //     type: {
  //       _id: "61a049aaad966900153a065b",
  //       rows: false,
  //       dropDown: false,
  //     },
  //   },
  //   {
  //     entries: [
  //       {
  //         topicNumber: "2.3.1",
  //         title: "Wahid",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.3.2",
  //         title: "Muthanna",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.3.3",
  //         title: "Jam’a",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.3.4",
  //         title: "Jam’a Saalim",
  //         rows: true,
  //         entries: [
  //           {
  //             topicNumber: "2.3.5",
  //             title: "Jam’a Saalim",
  //             entries: [
  //               {
  //                 sectionNumber: "2.3.5.1",
  //                 title: "Jam’a Saalim Muthakkar",
  //               },
  //               {
  //                 sectionNumber: "2.3.5.2",
  //                 title: "Jama’a Saalim Mu’annath",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         topicNumber: "2.3.6",
  //         title: "Jam’a Saalim Chart",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.3.7",
  //         title: "Jam’a Mukassar",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.3.8",
  //         title: "Jam’a Mukassar Chart",
  //         rows: false,
  //       },
  //     ],
  //     _id: "60ab6a260a5705404d68d9fd",
  //     title: "Adad",
  //     topicHeaderNumber: "2.3",
  //     type: {
  //       _id: "61a049aaad966900153a065b",
  //       rows: true,
  //       dropDown: false,
  //     },
  //   },
  //   {
  //     entries: [
  //       {
  //         topicNumber: "2.4.1",
  //         title: "Test Chart",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "3.1.1.1",
  //         title: "Mu’arifah",
  //         rows: true,
  //         entries: [
  //           {
  //             topicNumber: "3.1.1.1",
  //             title: "Mu’arifah",
  //             entries: [
  //               {
  //                 sectionNumber: "3.1.1.1.1",
  //                 title: "Ism Alam",
  //               },
  //               {
  //                 sectionNumber: "3.1.1.1.2",
  //                 title: "Ism Zamaa’ir",
  //               },
  //               {
  //                 sectionNumber: "3.1.1.1.3",
  //                 title: "Ism Ishaari",
  //               },
  //               {
  //                 sectionNumber: "3.1.1.1.4",
  //                 title: "Ism Mawthoola",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         topicNumber: "2.4.2",
  //         title: "Nakirah",
  //       },
  //       {
  //         topicNumber: "2.4.3",
  //         title: "Mua’rifah billam (How to make nakirah to Mua’rifah)",
  //         rows: false,
  //       },
  //       {
  //         topicNumber: "2.4.4",
  //         title: "How would Al react with different forms of Ism",
  //         rows: true,
  //         entries: [
  //           {
  //             topicNumber: "2.4.4",
  //             title: "How would Al react with different forms of Ism",
  //             entries: [
  //               {
  //                 sectionNumber: "2.4.4.1",
  //                 title: "Gair Muntharif Asma reacting to Al",
  //               },
  //               {
  //                 sectionNumber: "2.4.4.2",
  //                 title: "Ism Muthanna reacting to Al",
  //               },
  //               {
  //                 sectionNumber: "2.4.4.3",
  //                 title: "Jam’a reacting to Al",
  //               },
  //               {
  //                 sectionNumber: "2.4.4.4",
  //                 title: "Jama’a Saalim reacting to Al",
  //               },
  //               {
  //                 sectionNumber: "2.4.4.5",
  //                 title: "Jama’a Mukassar reacting to Al",
  //               },
  //               {
  //                 sectionNumber: "2.4.4.6",
  //                 title: "Mabni Asma Reacting to Al",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //       {
  //         topicNumber: "2.4.5",
  //         title: "Some things about Al",
  //         rows: true,
  //         entries: [
  //           {
  //             topicNumber: "2.4.5",
  //             title: "Some things about Al",
  //             entries: [
  //               {
  //                 sectionNumber: "2.4.5.1",
  //                 title: "Components of Al",
  //               },
  //               {
  //                 sectionNumber: "2.4.5.2",
  //                 title: "When to pronounce L (Kamri vs Shamsi Huruf)",
  //               },
  //               {
  //                 sectionNumber: "2.4.5.3",
  //                 title: "Arabs sometimes make an exception",
  //               },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //     _id: "60ab6a260a5705404d68d9fd",
  //     title: "Wus’at",
  //     topicHeaderNumber: "2.4",
  //     type: {
  //       _id: "61a049aaad966900153a065b",
  //       rows: false,
  //       dropDown: false,
  //     },
  //   },
  // ];

  //Decide here which SidebarData to send to application:

  // useEffect(() => {
  //   setEntryStore(SidebarData);
  // }, []);

  // Sending all the important data above as values in other parts of the application:

  const value = {
    subContainer,
    setSubContainer,
    subContainerEntries,
    setSubContainerEntries,
    entryStore,
    setEntryStore,
    topicDatafromBackEnd,
    setTopicDatafromBackEnd,
    exampleDatafromBackEnd,
    setExampleDatafromBackEnd,
    topicNumbersListfromBackEnd,
    setTopicNumbersListfromBackEnd,
    courseTitleUserIsOn,
    setCourseTitleUserIsOn,
    courseDetails,
    setCourseDetails,
  };

  return (
    <AmazonContext.Provider value={value}>
      {props.children}
    </AmazonContext.Provider>
  );
}
