import './App.css';
import Left from './Components/left';
import Right from './Components/right';

function App() {
  // a data variable that stores the information that is to be displayed on the application
  var DATA = {
    name: "Hey, I'm Muhammad Warzan",
    subtext: "Developer/Designer based in Karachi, Pakistan",
    jobStatus: "Software Development Enthusiast",
    twitterURL: "https://twitter.com/warzan_222555",
    instaURL: "https://www.instagram.com/sacrastic_viki/",
    githubURL: "https://github.com/hacker1649",
    linkedinURL: "https://www.linkedin.com/in/viki25070z/",
    resumeURL: "https://drive.google.com/file/d/1P7UQcnFH195O6Q1lQYRR4vkEhoPb0UT8/view?usp=sharing"
  }
  return (
    // we have two components in our online resume application named as left (left side) and right (right side) components
    <>
      
      <Left
        name={DATA.name}
        subtext={DATA.subtext}
        jobStatus={DATA.jobStatus}
        twitterURL={DATA.twitterURL}
        instaURL={DATA.instaURL}
        githubURL={DATA.githubURL}
        linkedinURL={DATA.linkedinURL}
      />

      <Right
        resumeURL={DATA.resumeURL}
      />

    </>
  );
}

export default App;

