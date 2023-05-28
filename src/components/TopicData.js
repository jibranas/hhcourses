import React from "react";
import Topic from "./Topic";

export const TopicData = [
  {
    topicHeader: "Why Arabic?",
    topicNumber: "1.2.1.0",
    topicTitle: "The purpose of this course",
    topicDescription:
      "By the Permission of Allah, we intend to provide the most easy and flexible course available freely online to help you understand the beauty of Quranic Arabic Grammer. \n\n The course's are pre-recorded and free so that you can watch them at your own leisure.\n\n The course is taught in English.",
  },
  {
    topicHeader: "Jins",
    topicNumber: "1.2.1.1",
    topicTitle: "Mu’anath Alamati",
    topicDescription:
      "It is that category of Maunnath Ghair Haqeeqi that can be identified easily with an ‘alamah (sign). \n\n For example, غُرْفَة (room), صَفْراء (yellow color), عَمْياءِّ (blind), عُظْمٰى (greatest) etc. \n\n We will discuss the different signs in the following sections.",
    topicYoutubeLink: "https://youtu.be/b65gV0C4wmg",
    sections: [
      {
        sectionNumber: "1.2.1.1.1",
        sectionTitle: "Gol Ta ة",
        sectionDescription: "Any Ism that ends with a ة  is a Mu’anath.",
        sectonYoutubeLink: "https://youtu.be/eQfP4iS5IaA",
        sectionNotes: [
          "85% of all Mu’anath end with a gol ta ة",
          "In Arabic the noun room (Ghurfatu) is a Mu’anath while in Urdu Room is a Muthakkar.",
          "In the arabic language all the words that end with ة have a Fathah before it.",
          "Usamah, Huzaifah are some names used for males but may look like Mua’anath. It is because they are actually Mu’anath. But since a male took them we will use the name as Muthakkar in a sentence. The real gender dominates.",
        ],
        exampleId: "1",
      },
      {
        sectionNumber: "1.2.1.1.2",
        sectionTitle: "Alif Mamdoodah اء",
        sectionDescription: "Any Ism that ends اء with a is a Mu’anath.",
        sectonYoutubeLink: "https://youtu.be/5Eqvt-eN82w",
        sectionNotes: [
          "Alif Mamdoodah always comes with a single haraqah at the end, not with tanween. Hence they are always Ghair Muntharif.",
        ],
        exampleId: "2",
      },
      {
        sectionNumber: "1.2.1.1.3",
        sectionTitle: "Alif Maqthoorah اى",
        sectionDescription: "Any Ism that ends اى with a is a Mu’anath.",
        sectonYoutubeLink: "https://youtu.be/SeNhUchglPU",
        sectionNotes: [
          "The name Musa ends with Alif Maqthoorah, but because it is used by a male, the real gender dominates and therfore it is used as a muthakkar.",
        ],
        exampleId: "3",
      },
    ],
  },
  {
    topicHeader: "Wus'at",
    topicNumber: "3.1.1.1",
    topicTitle: "Mu'arifah",
    topicDescription:
      "It is the term that is used to refer to something that is specific or special. \n\n We will see examples of this below.",
    topicYoutubeLink: "https://youtu.be/b65gV0C4wmg",
    sections: [
      {
        sectionNumber: "3.1.1.1.1",
        sectionTitle: "Ism Alam",
        sectionDescription:
          "This is the name of a specific person or place or thing",
        sectonYoutubeLink: "https://youtu.be/eQfP4iS5IaA",
        sectionNotes: [
          "Names of perons, places are all acceptable examples for this",
        ],
        exampleId: "1",
      },
      {
        sectionNumber: "3.1.1.1.2",
        sectionTitle: "Ism Zamaa'ir",
        sectionDescription:
          "Referred to as Pronouns or Personal Pronouns in the English Language.",
        sectonYoutubeLink: "https://youtu.be/5Eqvt-eN82w",
        sectionNotes: [
          "You refer to a person in one of three forms: First person, second person or third person.",
        ],
        exampleId: "2",
      },
      {
        sectionNumber: "3.1.1.1.3",
        sectionTitle: "Ism Ishaari",
        sectionDescription:
          "Referred to as Demonstrative Pronouns in the English Language.",
        sectonYoutubeLink: "https://youtu.be/SeNhUchglPU",
        sectionNotes: [
          "Used when you want to explain about something while indicating towards it.",
        ],
        exampleId: "3",
      },
      {
        sectionNumber: "3.1.1.1.4",
        sectionTitle: "Ism Mawthoola",
        sectionDescription: "Referred to as Relative in the English Language.",
        sectonYoutubeLink: "https://youtu.be/SeNhUchglPU",
        sectionNotes: [
          "Used when you want to explain about something in third person, the form is a little different.",
        ],
        exampleId: "3",
      },
    ],
  },
];

export const allExampleData = [
  {
    exampleId: "1",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "nan",
        isCorrect: true,
      },
      {
        answer: "Somewhat un",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Eat fruits",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "College die",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "2",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "I eat very",
        isCorrect: true,
      },
      {
        answer: "I typically",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "i eat very",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "balanced",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "3",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with our customer support?",
    answers: [
      {
        answer: "What ever t",
        isCorrect: true,
      },
      {
        answer: "I eat two-t",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "It needs so",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Diet consis",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "4",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with your experience?",
    answers: [
      {
        answer: "I try to ea",
        isCorrect: true,
      },
      {
        answer: "Making sure",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "My diet con",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Not that ba",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "5",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Would you recommend [company name] to a friend?",
    answers: [
      {
        answer: "I try to ea",
        isCorrect: true,
      },
      {
        answer: "I eat healt",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat two-t",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I used to e",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "6",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "Healthier t",
        isCorrect: true,
      },
      {
        answer: "Unhealthy f",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "A college s",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Since I am",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "7",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question: "Why did you purchase this product?",
    answers: [
      {
        answer: "I eat very",
        isCorrect: true,
      },
      {
        answer: "I eat very",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "High in pro",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat lots",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "8",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with your experience?",
    answers: [
      {
        answer: "vegetarian,",
        isCorrect: true,
      },
      {
        answer: "It is very",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "high in pro",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I dont fol",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "9",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "i eat very",
        isCorrect: true,
      },
      {
        answer: "Random. Not",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "moderately",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "High in car",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "10",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "Currently w",
        isCorrect: true,
      },
      {
        answer: "A very heal",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat lots",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "My diet is",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "11",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question:
      "If you could change one thing about [product], what would it be?",
    answers: [
      {
        answer: "I eat a lot",
        isCorrect: true,
      },
      {
        answer: "I typically",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "65 and out",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I try to ea",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "12",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "It is very",
        isCorrect: true,
      },
      {
        answer: "I eat somew",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Great",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat healt",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "13",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "I eat two-t",
        isCorrect: true,
      },
      {
        answer: "It needs so",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "balanced",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat fruit",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "14",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question: "What's the primary reason for canceling your account?",
    answers: [
      {
        answer: "I eat very",
        isCorrect: true,
      },
      {
        answer: "I have a di",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "2 meals a d",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Healthy and",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "15",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "I have a di",
        isCorrect: true,
      },
      {
        answer: "I eat in di",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat a pal",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "some health",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "16",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Did we answer all of your questions and concerns?",
    answers: [
      {
        answer: "I eat healt",
        isCorrect: true,
      },
      {
        answer: "high in pro",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat about",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "My diet is",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "17",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "Somewhat un",
        isCorrect: true,
      },
      {
        answer: "I have a di",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat lots",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Current die",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "18",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "protein, ca",
        isCorrect: true,
      },
      {
        answer: "I normally",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Very health",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat out m",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "19",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with [product]?",
    answers: [
      {
        answer: "I try to ea",
        isCorrect: true,
      },
      {
        answer: "I try to ea",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Unhealthy f",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I typically",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "20",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question:
      "Which other options were you considering before [product or company name]?",
    answers: [
      {
        answer: "I used to e",
        isCorrect: true,
      },
      {
        answer: "egan dining",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat food",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I try to ea",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "21",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "How can we be more helpful?",
    answers: [
      {
        answer: "I eat in di",
        isCorrect: true,
      },
      {
        answer: "Light break",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "No diet. I",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "lots of pas",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "22",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "What's the primary reason for canceling your account?",
    answers: [
      {
        answer: "I am not ve",
        isCorrect: true,
      },
      {
        answer: "For breakfa",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Very health",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Not that ba",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "23",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "At school i",
        isCorrect: true,
      },
      {
        answer: "nan",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "egan dining",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I have been",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "24",
    sectionNumber: "3.1.1.1.1",
    sectionTitle: "Ism Alam",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "At this tim",
        isCorrect: true,
      },
      {
        answer: "Healthy, in",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat very",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat a lot",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "25",
    sectionNumber: "3.1.1.1.2",
    sectionTitle: "Ism Zamaa'ir",
    type: "Identify",
    subType: "",
    question:
      "Which other options were you considering before [product or company name]?",
    answers: [
      {
        answer: "Healthier t",
        isCorrect: true,
      },
      {
        answer: "I eat 2 mea",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I typically",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "My diet con",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "26",
    sectionNumber: "3.1.1.1.3",
    sectionTitle: "Ism Ishaari",
    type: "Identify",
    subType: "",
    question: "Did we answer all of your questions and concerns?",
    answers: [
      {
        answer: "I eat very",
        isCorrect: true,
      },
      {
        answer: "moderately",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I typically",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "My current",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "27",
    sectionNumber: "3.1.1.1.4",
    sectionTitle: "Ism Mawthoola",
    type: "Identify",
    subType: "",
    question:
      "Which other options were you considering before [product or company name]?",
    answers: [
      {
        answer: "nan",
        isCorrect: true,
      },
      {
        answer: "My current",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I focus mos",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat very",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "28",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with [product]?",
    answers: [
      {
        answer: "Somewhat un",
        isCorrect: true,
      },
      {
        answer: "High in pro",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Making sure",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Very poor.",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "29",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with our customer support?",
    answers: [
      {
        answer: "I typically",
        isCorrect: true,
      },
      {
        answer: "My meals co",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "At this tim",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I try to ma",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "30",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "I eat a pal",
        isCorrect: true,
      },
      {
        answer: "My diet con",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "If there is",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "65 and out",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "31",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with [product]?",
    answers: [
      {
        answer: "Currently w",
        isCorrect: true,
      },
      {
        answer: "My current",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I am very h",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat lots",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "32",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "What's the primary reason for canceling your account?",
    answers: [
      {
        answer: "Not that ba",
        isCorrect: true,
      },
      {
        answer: "Current die",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I currently",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "vegetarian,",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "33",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question:
      "If you could change one thing about [product], what would it be?",
    answers: [
      {
        answer: "I eat lots",
        isCorrect: true,
      },
      {
        answer: "Not that ba",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Somewhat un",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat healt",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "34",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with our customer support?",
    answers: [
      {
        answer: "My current",
        isCorrect: true,
      },
      {
        answer: "i drink alo",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I usually e",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat somew",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "35",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "If there is",
        isCorrect: true,
      },
      {
        answer: "Simple brea",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat fruit",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I eat whate",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "36",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "What's the primary reason for canceling your account?",
    answers: [
      {
        answer: "high in pro",
        isCorrect: true,
      },
      {
        answer: "i currently",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat very",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "It is prett",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "37",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "What's the primary reason for canceling your account?",
    answers: [
      {
        answer: "My current",
        isCorrect: true,
      },
      {
        answer: "Rice, oatme",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "lots of pas",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "For breakfa",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "38",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "I do not ge",
        isCorrect: true,
      },
      {
        answer: "I am on a v",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Diet consis",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "High in pro",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "39",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question: "Why did you purchase this product?",
    answers: [
      {
        answer: "I eat three",
        isCorrect: true,
      },
      {
        answer: "I eat some",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "At school i",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Rice, oatme",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "40",
    sectionNumber: "1.2.1.1.1",
    sectionTitle: "Gol Ta",
    type: "Identify",
    subType: "",
    question: "Did we answer all of your questions and concerns?",
    answers: [
      {
        answer: "My diet is",
        isCorrect: true,
      },
      {
        answer: "I eat usual",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Great",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Simple brea",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "41",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "What is your favorite product?",
    answers: [
      {
        answer: "I have a di",
        isCorrect: true,
      },
      {
        answer: "My diet con",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "egan dining",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "High in pro",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "42",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "For breakfa",
        isCorrect: true,
      },
      {
        answer: "Making sure",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Since I am",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "moderately",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "43",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "protein, ca",
        isCorrect: true,
      },
      {
        answer: "College die",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "anything an",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "2 meals a d",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "44",
    sectionNumber: "1.2.1.1.4",
    sectionTitle: "A New Topic",
    type: "Identify",
    subType: "",
    question: "How satisfied are you with [product]?",
    answers: [
      {
        answer: "I do not ge",
        isCorrect: true,
      },
      {
        answer: "What ever t",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Healthy and",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I am not ve",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "45",
    sectionNumber: "1.2.1.1.5",
    sectionTitle: "Coming Soon",
    type: "Identify",
    subType: "",
    question: "Did [product] help you accomplish your goal?",
    answers: [
      {
        answer: "I eat at le",
        isCorrect: true,
      },
      {
        answer: "2 meals a d",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "high in pro",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I typically",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "46",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "Diet consis",
        isCorrect: true,
      },
      {
        answer: "It is prett",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "My diet con",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I typically",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "47",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "Are we meeting your expectations?",
    answers: [
      {
        answer: "Simple brea",
        isCorrect: true,
      },
      {
        answer: "I eat fruit",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat 2 mea",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "I try to ea",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "48",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question:
      "How would you feel if we did not offer this product, feature, or service?",
    answers: [
      {
        answer: "Healthier t",
        isCorrect: true,
      },
      {
        answer: "moderately",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "i currently",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "Making sure",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "49",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "What is your favorite product?",
    answers: [
      {
        answer: "Healthier t",
        isCorrect: true,
      },
      {
        answer: "some health",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "Current die",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "high in pro",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "50",
    sectionNumber: "1.2.1.1.2",
    sectionTitle: "Alif Mamdoodah",
    type: "Identify",
    subType: "",
    question: "Why did you purchase this product?",
    answers: [
      {
        answer: "Very poor.",
        isCorrect: true,
      },
      {
        answer: "nan",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat a lot",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "vegetarian,",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
  {
    exampleId: "51",
    sectionNumber: "1.2.1.1.3",
    sectionTitle: "Alif Maqthoorah",
    type: "Identify",
    subType: "",
    question: "Would you recommend [product] to a friend?",
    answers: [
      {
        answer: "My current",
        isCorrect: true,
      },
      {
        answer: "I eat in di",
        explanation:
          "This ism does not end with a gol ta and therefore it is wrong you got it wrong so try again.",
        isCorrect: false,
      },
      {
        answer: "I eat healt",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
      {
        answer: "some health",
        explanation: "This ism does not end with a gol ta.",
        isCorrect: false,
      },
    ],
  },
];

export default TopicData;
