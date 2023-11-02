import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SideBar, Video } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  // will consist of 2 things - home videos feed and a sidebar

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    // a stack so as to have 2 things - feed and sidebar in flex row, and when small screens then flex column
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      {/* Box component for sidebar things */}
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 1 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ color: "#fff", mt: "1.5" }}
        >
          Copyright 2023 Shlan Media House
        </Typography>
      </Box>

      {/* Box component for main feed videos */}
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
          {selectedCategory}
          <span style={{ color: "#F31509", paddingLeft: "8px" }}>videos</span>
        </Typography>

        <Video videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
