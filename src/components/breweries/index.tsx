import React from "react";
import { useGetBreweries } from "../../hooks/useGetBreweries";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router";

export const Breweries = () => {
  const { data: brewery } = useGetBreweries();
  return (
    <Box
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "15px",
        padding: "20px 0",
      }}
    >
      {brewery?.map((b) => {
        return (
          <Link
            key={b.id}
            to={`/breweries/${b.id}`}
            style={{ textDecoration: "none" }}
          >
            <Card variant="outlined" sx={{ maxWidth: 250, height: "100%" }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  boxSizing: "border-box",
                  padding: "16px !important",
                }}
              >
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="h6">{b.name}</Typography>
                  <Typography>{b.address_1}</Typography>
                  <Typography>
                    {b.city} {b.state} - {b.phone}
                  </Typography>
                  <Typography>{b.country}</Typography>
                </Box>
                <Box>
                  <Divider />
                  <Chip label={b.brewery_type} sx={{ marginTop: 1 }} />
                </Box>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </Box>
  );
};
