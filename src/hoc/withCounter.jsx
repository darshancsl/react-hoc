import { useState } from "react";

export const withCounter = (Component) => {
  return function HocCounter(props) {
    const [count, setCount] = useState(0);
    const handleCount = () => {
      setCount((prev) => prev + 1);
    };
    return <Component {...props} count={count} handleCount={handleCount} />;
  };
};
