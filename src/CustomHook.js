import { useState, useEffect } from "react";

export default function useOddOrEven(count) {
  const [oddOrEven, setOddOrEven] = useState("even");
  useEffect(() => {
    console.log("Setting odd or even in custom hook to ...");
    setOddOrEven(count % 2 ? "odd" : "even");
  }, [count]);
  return oddOrEven;
}
