import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    // a stack so as to have 2 things - feed and sidebar in flex row, and when small screens then flex column
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          mb={2}
          fontWeight="bold"
          sx={{ color: "#fff" }}
        >
          Videos for:
          <span style={{ color: "#F31509", paddingLeft: "8px" }}>
            {searchTerm}
          </span>
        </Typography>

        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default SearchFeed;
