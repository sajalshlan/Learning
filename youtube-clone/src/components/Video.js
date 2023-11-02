import { Box, Stack } from "@mui/material";
import React from "react";
import { VideoCard, ChannelCard } from "./";

const Video = ({ videos, direction }) => {
  if (!videos?.length) return <h3>Loading...</h3>;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => {
        return (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        );
      })}
    </Stack>
  );
};

export default Video;
