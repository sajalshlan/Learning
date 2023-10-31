import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
    type: "video",
  },
  headers: {
    "X-RapidAPI-Key": "46d08d9ecemsha937c91fd9d7fc1p1c3f7ajsn8ecb19a8ab5a",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
