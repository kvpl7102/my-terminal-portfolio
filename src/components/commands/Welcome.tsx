import {
  Cmd,
  HeroContainer,
  Link,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`
██╗   ██╗██╗██████╗ ██╗  ██╗██╗   ██╗███╗   ██╗ ██████╗       
██║   ██║██║██╔══██╗██║  ██║██║   ██║████╗  ██║██╔════╝      
██║   ██║██║██████╔╝███████║██║   ██║██╔██╗ ██║██║  ███╗     
╚██╗ ██╔╝██║██╔═══╝ ██╔══██║██║   ██║██║╚██╗██║██║   ██║
 ╚████╔╝ ██║██║     ██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝
  ╚═══╝  ╚═╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝                                                                                     
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`

██╗   ██╗██╗                                
██║   ██║██║                                
██║   ██║██║                                
╚██╗ ██╔╝██║                                
 ╚████╔╝ ██║                                
  ╚═══╝  ╚═╝                                
██████╗ ██╗  ██╗██╗   ██╗███╗   ██╗ ██████╗ 
██╔══██╗██║  ██║██║   ██║████╗  ██║██╔════╝ 
██████╔╝███████║██║   ██║██╔██╗ ██║██║  ███╗
██╔═══╝ ██╔══██║██║   ██║██║╚██╗██║██║   ██║
██║     ██║  ██║╚██████╔╝██║ ╚████║╚██████╔╝
╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝                                       
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. For a list of available commands, type `<Cmd>help</Cmd>`.</div>
        <Seperator>--------</Seperator>
        <div>My {""}
          <Link href="https://kvpl7102.github.io/my-resume/" target="_blank">
          resume
          </Link>
          {""} and my {""}
          <Link href="https://github.com/kvpl7102" target="_blank">
          github
          </Link>
        </div>
        <Seperator>--------</Seperator>
        <div>This project was inspired by {""} <Link href="https://github.com/Cveinnt/LiveTerm" target="_blank">LiveTerm</Link> project and M4TT72's {""} <Link href="https://github.com/m4tt72/terminal" target="_blank">Terminal</Link></div>
      </div>
      
    </HeroContainer>
  );
};

export default Welcome;
