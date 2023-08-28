/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Manas Goyal",
  title: "Hi all, I'm Manas",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / React Native ."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/manug18",
  linkedin: "https://www.linkedin.com/in/manas-goyal-a841311b0/",
  gmail: "manasgoyal913@gmail.com",
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Develop native mobile applications"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fa-solid fa-user",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-aws",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "R V College of Engineering",
      logo: require("./assets/images/rvcollege.png"),
      subHeader: "Bachelor Of Engineering",
      duration: "August 2019 - July 2023",
      desc: "First Class with Distinction",
    },
    {
      schoolName: "Divine International Academy",
      logo: require("./assets/images/dia.png"),
      subHeader: "XII Standard (CBSE)",
      duration: "July 2016 - July 2018",
      desc: "Percentage:92%",
    },
    {
      schoolName: "Maa Anjani Sr. Sec. School",
      logo: require("./assets/images/maa.png"),
      subHeader: "X Standard (CBSE)",
      duration: "August 2014 - July 2016",
      desc: "CGPA:9.4",
    },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend",
      progressPercentage: "90%",
    },
    {
      Stack: "React Native",
      progressPercentage: "60%",
    },
    {
      Stack: "Backend",
      progressPercentage: "50%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some of the recent personal projects",
  projects: [
    {
      image: require("./assets/images/download.png"),
      projectName: "Job Finder",
      projectDesc: "React Native App to help users to search for jobs ",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
    {
      image: require("./assets/images/download.png"),
      projectName: "Income Tax Calculator",
      projectDesc:
        "An Android App to help users to calculate the net payable tax ",
      footerLink: [
        {
          name: "Visit Website",
          url: "",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Engineer",
      company: "SleevesUp",
      companylogo: require("./assets/images/sleevesup.webp"),
      date: "March 2023 – Present",
      desc: "Studio Prohire",
      descBullets: [
        "Led the end-to-end development of the platform for the examiner view, spearheading both frontend and backend tasks.",
        "Designed and implemented a responsive frontend for examiner view using Typescript, with a modern React.js framework in the Material UI.",
        "Developed dynamic exam creation functionality, allowing examiners to customize sections in real-time",
        "Implemented advanced filters to enhance question search efficiency based on various criteria and giving them the option to shuffle questions randomnly.",
        "Created a scheduling feature, enabling examiners to effortlessly plan and manage exam sessions",
        "Architected and implemented the backend system for examinee view, ensuring seamless integration of various components.",
        "Integrated the Judge0 API for code evaluation, enabling real-time code execution and saving during the exam",
        "Developed a secure exam link generation system, granting examinees access to their unique  exams",
        "Implemented image proctoring, capturing examinees' images every three seconds for enhanced exam integrity and securely storing it in Amazon S3",
      ],
    },
  ],
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all",

  number: "+91-6397775264",
  email_address: "manasgoyal913@gmail.com",
  value: "Website is work in progress",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
};
