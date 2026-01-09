import { useEffect, useState } from "react";

const useCountUp = (target = 0, duration = 800) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!target) return;

    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [target, duration]);

  return count;
};

export default useCountUp;
