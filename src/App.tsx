import React from "react";
import { Box } from "@mui/material";
import { Breweries } from "./components/breweries";
import { Route, Routes } from "react-router";
import { DetailBrewerie } from "./components/breweryDetail";
import { Header } from "./components/header";

function App() {
  return (
    <Box display="grid" sx={{ placeItems: "center" }}>
      <Header />
      <Routes>
        <Route path="breweries" element={<Breweries />} />
        <Route path="breweries/:id" element={<DetailBrewerie />} />
      </Routes>
    </Box>
  );
}

export default App;
