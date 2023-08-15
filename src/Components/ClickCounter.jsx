import { withCounter } from "../hoc/withCounter";
import { PropTypes } from "prop-types";

const ClickCounter = ({ count, handleCount }) => {
  return (
    <>
      <button onClick={handleCount}>Click Me</button>
      <p>{count}</p>
    </>
  );
};

ClickCounter.propTypes = {
  count: PropTypes.number.isRequired,
  handleCount: PropTypes.func.isRequired,
};

const EnhancedClickCounter = withCounter(ClickCounter);
export default EnhancedClickCounter;
