import React from "react";
import { Box, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useGetBreweryById } from "../../hooks/useGetBreweryById";

export const DetailBrewerie = () => {
  const { id } = useParams();
  const { data: brewery, loading: isLoading } = useGetBreweryById(id!);
  return (
    <Box>
      <Typography>Details</Typography>
      {isLoading && <Skeleton />}
      <Typography>{brewery?.name}</Typography>
    </Box>
  );
};
