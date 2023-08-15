import { withCounter } from "../hoc/withCounter";
import { PropTypes } from "prop-types";

const HoverCounter = ({ count, handleCount }) => {
  return (
    <>
      <button onMouseOver={handleCount}>Hover Me</button>
      <p>{count}</p>
    </>
  );
};

HoverCounter.propTypes = {
  count: PropTypes.number.isRequired,
  handleCount: PropTypes.func.isRequired,
};

const EnhancedHoverCounter = withCounter(HoverCounter);
export default EnhancedHoverCounter;
