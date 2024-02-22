import { useState } from "react";

export const useCustom = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount((prev) => prev + 1);

  return { count, setCount, handleClick };
};
