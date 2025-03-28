import React from "react";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router";
import { mappedColors } from "../breweries/constants";
import { IBrewerie } from "../../types/breweries";

interface IBreweryCard {
  brewery: IBrewerie;
}

export const BreweryCard = ({ brewery }: IBreweryCard) => {
  return (
    <Link to={`/breweries/${brewery.id}`} style={{ textDecoration: "none" }}>
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
            <Typography variant="h6">{brewery.name}</Typography>
            <Typography>{brewery.address_1}</Typography>
            <Typography>
              {brewery.city} {brewery.state} - {brewery.phone}
            </Typography>
            <Typography>{brewery.country}</Typography>
          </Box>
          <Box>
            <Divider />
            <Chip
              label={brewery.brewery_type}
              sx={{
                marginTop: 1,
                backgroundColor: mappedColors(brewery.brewery_type),
                color: "white",
              }}
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};
