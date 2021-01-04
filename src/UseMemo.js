import { useMemo } from "react";

export default function DisplayTime(month, day, year, hour, minute) {
  const dateString = useMemo(() => {
    console.log("Updating memoized values...");
    return `${month}/${day}/${year} ${hour}:${minute}`;
  }, [month, day, year, hour, minute]);

  return dateString;
}
