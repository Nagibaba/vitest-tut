import { useState } from "react";

export const useCustom = () => {
  const [count, setCount] = useState(0);

  return { count, setCount };
};
