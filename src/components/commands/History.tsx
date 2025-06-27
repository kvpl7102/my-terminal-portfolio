import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const History: React.FC = () => {
  const { history, index } = useContext(termContext);
  const currentHistory = _.reverse(_.slice(history, index));

  return (
    <Wrapper data-testid="history">
      {currentHistory.map(cmd => (
        <div key={_.uniqueId(`${cmd}_`)}>{cmd}</div>
      ))}
    </Wrapper>
  );
};

export default History;
// This component displays the command history in reverse order,
// starting from the most recent command. It uses the `termContext` to access  
// the `history` and `index` values. The `history` is sliced from the current
// index to the end, and then reversed to show the most recent commands first.