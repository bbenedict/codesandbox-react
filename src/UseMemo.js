import { useMemo } from "react";

export default function PosOrNeg(count) {
  const result = useMemo(() => {
    console.log("Updating memoized value...");
    if (count < 0) return "negative";
    if (count > 0) return "positive";
    return "at the equator";
  }, [count]);

  return result;
}
