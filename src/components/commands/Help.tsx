import {
  Cmd,
  CmdDesc,
  CmdList,
  HelpWrapper,
  KeyContainer,
} from "../styles/Help.styled";
import { commands } from "../Terminal";
import { generateTabs } from "../../utils/funcs";

const Help: React.FC = () => {
  return (
    <HelpWrapper data-testid="help">
      {commands.map(({ cmd, desc, tab }) => (
        <CmdList key={cmd}>
          <Cmd>{cmd}</Cmd>
          {generateTabs(tab)}
          <CmdDesc>- {desc}</CmdDesc>
        </CmdList>
      ))}
      <KeyContainer>
        <div>Tab&nbsp;=&gt; Autocomplete the command</div>
        <div>Up Arrow =&gt; Go back to previous command</div>
        <div>Ctrl + L / clear =&gt; Clear the terminal</div>
      </KeyContainer>
    </HelpWrapper>
  );
};

export default Help;
