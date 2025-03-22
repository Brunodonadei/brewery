import React from "react";
import { Box, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        background: "linear-gradient(to right, black, #333)",
        width: "100%",
        boxSizing: "border-box",
        position: "sticky",
        top: 0,
      }}
    >
      <Box sx={{ maxWidth: "1055px", margin: "0 auto" }}>
        <Typography variant="h6" color="white">
          Breweries
        </Typography>
        <Typography variant="subtitle2" color="white">
          A Breweries list by Open Brewery DB
        </Typography>
      </Box>
    </Box>
  );
};
