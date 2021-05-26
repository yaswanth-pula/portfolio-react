import resume from "../assets/resume.txt";

const AppHomeResumeButton = () => {
  return (
    <div className="resume-container">
      <a href={resume} download className="resume-link">
        See My Resume
      </a>
    </div>
  );
};

export default AppHomeResumeButton;
