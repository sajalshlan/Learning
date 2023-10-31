import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import Video from "./Video";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight="95vh">
      {/* box with the channel logo-subscriber count and background gradient */}
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(95,95,183,1) 35%, rgba(0,212,255,1) 100%",
            zIndex: 10,
            height: "250px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
      </Box>

      {/* box for the videos related to the channel */}
      <Box>
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
