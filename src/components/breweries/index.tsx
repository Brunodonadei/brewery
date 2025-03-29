import React, { useState } from "react";
import { Box, Button, Pagination, Skeleton } from "@mui/material";
import { Filter } from "../filter";
import { useGetBreweries } from "../../hooks/useGetBreweries";
import { useGetMetaData } from "../../hooks/useGetMetaData";
import { BreweryCard } from "../breweryCard";
import { validTypes } from "../../utils/breweryTypes";

export const Breweries = () => {
  const [selectedType, setSelectedType] = useState<string>("padrão");
  const [page, setPage] = useState<number>(1);
  const { data: breweries, loading: isLoadingBreweries } = useGetBreweries(
    page,
    selectedType
  );
  const { data: metaData, loading: isLoadingMeta } =
    useGetMetaData(selectedType);
  const itemsPerPage = 16;
  const totalPages = metaData ? Math.ceil(metaData.total / itemsPerPage) : 0;
  const handleTypeChange = (newType: string) => {
    setSelectedType(newType);
    setPage(1);
  };

  return (
    <>
      <Filter
        value={selectedType}
        setValue={handleTypeChange}
        options={validTypes}
      />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "15px",
          padding: "20px 0",
        }}
      >
        {isLoadingBreweries || isLoadingMeta
          ? Array.from({ length: itemsPerPage }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={235}
                height={235}
                animation="wave"
                sx={{ borderRadius: "4px" }}
              />
            ))
          : breweries?.map((b) => <BreweryCard key={b.id} brewery={b} />)}
      </Box>
      <Pagination
        count={totalPages}
        page={page}
        onChange={(_, value) => setPage(value)}
        disabled={!breweries?.length}
        sx={{ marginBottom: "20px" }}
      />
    </>
  );
};
