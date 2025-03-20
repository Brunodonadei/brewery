import React from "react";
import { useGetBrewerie } from "./hooks/useGetBrewerie";

function App() {
  const { data, loading } = useGetBrewerie();
  console.log(data, loading);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
      }}
    >
      {data?.map((d) => {
        return (
          <div style={{ background: "#a0a0a0", maxWidth: "280px" }} key={d.id}>
            <h2>{d.name}</h2>
            <span>{d.address_1}</span>
            <span>
              {d.city} {d.state} - {d.phone}
            </span>
            <span>{d.country}</span>
          </div>
        );
      })}
    </div>
  );
}

export default App;
