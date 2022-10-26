import React from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  const [searchParams] = useSearchParams({
    q: "", // Query
  });

  console.log(searchParams.get("q"));

  return (
    <div>
      <span>Search Page</span>
    </div>
  );
}
