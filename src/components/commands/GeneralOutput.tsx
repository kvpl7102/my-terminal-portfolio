import { Wrapper } from "../styles/Output.styled";

type Props = {
  children: string;
};

const GeneralOutput: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default GeneralOutput;
// This component is a general output component that can be used to display
// any text in the terminal. It takes a `children` prop which is the text to
// be displayed and wraps it in a styled `Wrapper` component for consistent styling.
// It can be used for various commands that do not have specific output components.