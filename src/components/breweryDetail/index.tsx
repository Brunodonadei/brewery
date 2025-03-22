import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Link, useParams } from "react-router";
import { useGetBreweryById } from "../../hooks/useGetBreweryById";
import { BreweryDetailInfo, BreweryLink } from "./constants";

export const DetailBrewerie = () => {
  const { id } = useParams();
  const { data: brewery, loading: isLoading } = useGetBreweryById(id!);
  const urlMaps = "https://www.google.com/maps?q=";

  if (!brewery || isLoading) return;
  const {
    latitude,
    longitude,
    website_url,
    name,
    address_1,
    city,
    state,
    postal_code,
    country,
    phone,
  } = brewery;

  const location = latitude && longitude ? `${latitude},${longitude}` : null;

  return (
    <Box
      sx={{
        maxWidth: 1055,
        width: "100%",
        boxSizing: "border-box",
        padding: "0 20px",
      }}
    >
      <Typography sx={{ margin: "10px 0" }}>
        <Link
          to={"/breweries"}
          style={{
            margin: "10px 0 !important",
            color: "rgba(0, 0, 0, 0.87)",
            textDecoration: "none",
          }}
        >
          Voltar
        </Link>
      </Typography>

      <Card variant="outlined">
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            boxSizing: "border-box",
            padding: "16px !important",
          }}
        >
          <Typography variant="h3" sx={{ marginBottom: "16px" }}>
            {name}
          </Typography>
          <BreweryDetailInfo label="Rua" value={address_1} />
          <BreweryDetailInfo label="Cidade" value={city} />
          <BreweryDetailInfo label="Estado" value={state} />
          <BreweryDetailInfo label="Código postal" value={postal_code} />
          <BreweryDetailInfo label="País" value={country} />
          <BreweryDetailInfo label="Telefone" value={phone} />
          {website_url && <BreweryLink label="Website" url={website_url} />}
          {location && (
            <BreweryLink label="Ver no maps" url={`${urlMaps}${location}`} />
          )}
        </CardContent>
      </Card>
    </Box>
  );
};
