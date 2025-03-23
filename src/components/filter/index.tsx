import React from "react";
import { MenuItem, Select, Box, Typography } from "@mui/material";

export const Filter = ({
  value,
  setValue,
  options,
}: {
  value: string;
  setValue: (value: string) => void;
  options: string[];
}) => {
  return (
    <Box
      sx={{
        marginTop: "20px",
        width: "100%",
        maxWidth: 1055,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography>Filtro:</Typography>
      <Select
        sx={{ maxWidth: 100, height: "40px", marginLeft: "10px" }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        fullWidth
        displayEmpty
      >
        <MenuItem value="padrão">padrão</MenuItem>
        {options.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};
