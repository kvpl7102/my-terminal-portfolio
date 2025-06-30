import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Here are some of tiny things I've done so far!
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "My Terminal Portfolio",
    desc: "A terminal-based portfolio built with React, TypeScript, and Styled Components.",
    url: "https://my-terminal-portfolio-alpha.vercel.app/"
  },
  {
    id: 2,
    title: "NLP Document Search Engine with Bigram Prediction",
    desc: "A Java-based natural language processing system that implements intelligent document search and word prediction capabilities.",
    url: "https://github.com/kvpl7102/nlp-document-search"
  },
  {
    id: 3,
    title: "Fullstack AI Chatbot",
    desc: "A fullstack AI chatbot application similar to ChatGPT using OpenAI API",
    url: "https://github.com/kvpl7102/chatgpt-clone-app"
  }
];

export default Projects;
