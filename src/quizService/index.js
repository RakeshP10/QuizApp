const qBank = [
  {
    question:
      "_____ provides long distance transmission of data over large geographic areas",
    answers: ["LAN", "MAN", "PAN", "WAN"],
    correct: "WAN",
    questionId: "099099"
  },
  {
    question:
      "The function performed by data link layer is ____",
    answers: ["Line configuration", "Routing", "Physical addressing", "Encryption"],
    correct: "Physical addressing",
    questionId: "267908"
  },
  {
    question: "TCP/IP protocol suite is made of _____ layers",
    answers: [
      "Seven",
      "Six",
      "Five",
      "Three"
    ],
    correct: "Five",
    questionId: "333247"
  },
  {
    question: "_____ used to represent digital data by using digital signals",
    answers: ["Digital to Digital conversion","Analog to Digital conversion", "Digital to Analog conversion", "Analog to Analog conversion"],
    correct: "Digital to Digital conversion",
    questionId: "496293"
  },
  {
    question:
      "In ____, use two levels of voltage amplitude",
    answers: [
      "Unipolar NRZ",
      "Polar NRZ",
      "Bipolar",
      "AMI"
    ],
    correct: "Polar NRZ",
    questionId: "588909"
  },
  {
    question:
      'In _____ technique, each data bit replaced with n bits using a spreading code',
    answers: ["FHSS", "DSSS", "Both a and b", "None of the above"],
    correct: "DSSS",
    questionId: "648452"
  },
  {
    question: "RG – 59 is category of _____ cable",
    answers: ["Twisted Pair", "Fibre Optic", "Coaxial", "Unguided medium"],
    correct: "Coaxial",
    questionId: "786649"
  },
  {
    question:
      "____ operates only in physical layer",
    answers: ["Repeater", "Bridge", "Router", "Gateway"],
    correct: "Repeater",
    questionId: "839754"
  },
  {
    question:
      "The _______ layer is responsible for movements of individual bits from one hop (node) to the next",
    answers: [
      "Physical",
      "Data Link",
      "Transport",
      "Network"
    ],
    correct: "Physical",
    questionId: "98390"
  },
  {
    question: "The _______ data link layer is responsible for moving frames from one hop (node) to the next",
    answers: ["Physical", "Data Link", "Transport", "Network"],
    correct: "Data Link",
    questionId: "1071006"
  },
  {
    question: "The ________ layer is responsible for providing services to the user",
    answers: ["Session", "Presentation", "Application", "Network"],
    correct: "Application",
    questionId: "1174154"
  },
  {
    question: "The ________ layer is responsible for translation,compression, and encryption",
    answers: ["Session", "Presentation", "Transport", "Network"],
    correct: "Presentation",
    questionId: "1226535"
  },
  {
    question: "The ______ layer is responsible for dialog control and synchronization",
    answers: ["Session", " Data Link", "Transport", "Network"],
    correct: "Session",
    questionId: "1310938"
  },
  {
    question: "The ______ layer is responsible for the delivery of a message from one process to another",
    answers: ["Physical", "Data Link", "Transport", "Network"],
    correct: "Transport",
    questionId: "1436873"
  },
  {
    question: "The ______ layer is responsible for the delivery of individual packets from the source host to the destination host",
    answers: ["Physical", "Data Link", "Transport", "Network"],
    correct: "Network",
    questionId: "1515110"
  },
  
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
