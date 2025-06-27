import {
  AboutWrapper,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Vi Phung</HighlightSpan>!
      </p>
      <p>
        Currently based in Montreal, Quebec, Canada, I have a strong foundation
        in backend development and data processing.
      </p>
      <p>
        I enjoy coding to solve real-world problems,
        and I’m always eager to learn and collaborate. 
        I’m seeking junior roles in software or data development 
        where I can grow and contribute meaningfully
      </p>

    </AboutWrapper>
  );
};

export default About;
