import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

// export const SidebarData = [
//     {
//         title: 'Overview',
//         path: '/overview',
//         icon: <AiIcons.AiFillHome/>,
//         iconClosed: <RiIcons.RiArrowDownSFill/>,
//         iconOpened: <RiIcons.RiArrowUpSFill/>,
//         subNav: [
//             {
//                 title: 'Overview',
//                 path: '/overview',
//                 icon: <IoIcons.IoIosPaper/>
//             },
//             {
//                 title: 'Revenue',
//                 path: '/revenue',
//                 icon: <IoIcons.IoIosPaper/>
//             }
//         ]
//     },
//     {
//         title: 'Reports',
//         path: '/reports',
//         icon: <AiIcons.AiFillHome/>,
//         iconClosed: <RiIcons.RiArrowDownSFill/>,
//         iconOpened: <RiIcons.RiArrowUpSFill/>,
//         subNav: [
//             {
//                 title: 'Report4s',
//                 path: '/reports/reports1',
//                 icon: <IoIcons.IoIosPaper/>
//             },
//             {
//                 title: 'Reports 2',
//                 path: '/reports/reports2',
//                 icon: <IoIcons.IoIosPaper/>
//             }
//         ]
//     },
//     {
//         title: 'Nothing',
//         path: '/nothing',
//         icon: <AiIcons.AiFillHome/>,
//         iconClosed: <RiIcons.RiArrowDownSFill/>,
//         iconOpened: <RiIcons.RiArrowUpSFill/>
//     }
// ]

export const SidebarData = [
  {
    entries: [
      {
        title: "The purpose of this course",
      },
      {
        title: "Qalimah",
      },
    ],
    _id: "60ab69680a5705404d68d9f9",
    title: "Why Arabic?",
    type: {
      _id: "61a049aaad966900153a0659",
      rows: true,
      dropDown: false,
    },
  },
  {
    entries: [
      {
        title: "Ism Muntharif",
      },
      {
        title: "Gair Muntharif Asma",
      },
      {
        title: "Mabni Asma",
      },
    ],
    _id: "60ab69ee0a5705404d68d9fc",
    title: "I'araab",
    type: {
      _id: "61a049aaad966900153a065a",
      rows: true,
      dropDown: false,
    },
  },
  {
    entries: [
      {
        title: "Mu’annath",
      },
      {
        title: "Mu’anath Haqeeqi",
      },
      {
        title: "Mu’anath Gair Haqeeqi",
      },
      {
        title: "Mua’nath Alamati",
        entries: [
          {
            title: "Mua’nath Alamati",
            entries: [
              {
                title: "Gol Ta ة",
              },
              {
                title: "Alif Mamdoodah اء",
              },
              {
                title: "Alif Maqthoorah اى",
              },
            ],
          },
        ],
      },
      {
        title: "Mua’nath Samai",
      },
      {
        title: "How to convert Muthakkar to Mu’anath",
      },
    ],
    _id: "60ab6a260a5705404d68d9fd",
    title: "Jins",
    type: {
      _id: "61a049aaad966900153a065b",
      rows: true,
      dropDown: false,
    },
  },
  {
    entries: [
      {
        title: "Wahid",
      },
      {
        title: "Muthanna",
      },
      {
        title: "Jam’a",
      },
      {
        title: "Jam’a Saalim",
        entries: [
          {
            title: "Jam’a Saalim",
            entries: [
              {
                title: "Jam’a Saalim Muthakkar",
              },
              {
                title: "Jama’a Saalim Mu’annath",
              },
            ],
          },
        ],
      },
      {
        title: "Jam’a Saalim Chart",
      },
      {
        title: "Jam’a Mukassar",
      },
      {
        title: "Jam’a Mukassar Chart",
      },
    ],
    _id: "60ab6a260a5705404d68d9fd",
    title: "Adad",
    type: {
      _id: "61a049aaad966900153a065b",
      rows: true,
      dropDown: false,
    },
  },
  {
    entries: [
      {
        title: "Test Chart",
      },
      {
        title: "Mu’arifah",
        entries: [
          {
            title: "Mu’arifah",
            entries: [
              {
                title: "Ism Alam",
              },
              {
                title: "Ism Zamaa’ir",
              },
              {
                title: "Ism Ishaari",
              },
              {
                title: "Ism Mawthoola",
              },
            ],
          },
        ],
      },
      {
        title: "Nakirah",
      },
      {
        title: "Mua’rifah billam (How to make nakirah to Mua’rifah)",
      },
      {
        title: "How would Al react with different forms of Ism",
        entries: [
          {
            title: "How would Al react with different forms of Ism",
            entries: [
              {
                title: "Gair Muntharif Asma reacting to Al",
              },
              {
                title: "Ism Muthanna reacting to Al",
              },
              {
                title: "Jam’a reacting to Al",
              },
              {
                title: "Jama’a Saalim reacting to Al",
              },
              {
                title: "Jama’a Mukassar reacting to Al",
              },
              {
                title: "Mabni Asma Reacting to Al",
              },
            ],
          },
        ],
      },
      {
        title: "Some things about Al",
        entries: [
          {
            title: "Some things about Al",
            entries: [
              {
                title: "Components of Al",
              },
              {
                title: "When to pronounce L (Kamri vs Shamsi Huruf)",
              },
              {
                title: "Arabs sometimes make an exception",
              },
            ],
          },
        ],
      },
    ],
    _id: "60ab6a260a5705404d68d9fd",
    title: "Wus’at",
    type: {
      _id: "61a049aaad966900153a065b",
      rows: true,
      dropDown: false,
    },
  },
];

export default SidebarData;
