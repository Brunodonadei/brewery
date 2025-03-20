import React from "react";
import { useGetBrewerie } from "./hooks/useGetBrewerie";

function App() {
  const { data, loading } = useGetBrewerie();
  console.log(data, loading);
  return <></>;
}

export default App;
