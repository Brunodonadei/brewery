import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router";

export const BreweryDetailInfo = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  return value ? (
    <Typography>
      <span style={{ fontWeight: 500 }}>{label}:</span> {value}
    </Typography>
  ) : null;
};

export const BreweryLink = ({ label, url }: { label: string; url: string }) => {
  return (
    <Typography sx={{ fontWeight: 500 }}>
      {label}:{" "}
      <Link
        target="_blank"
        to={url}
        style={{ fontWeight: "normal", color: "#4d85e1" }}
      >
        {url}
      </Link>
    </Typography>
  );
};
